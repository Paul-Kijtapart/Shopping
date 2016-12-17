import React from 'react';
import ReactDOM from 'react-dom';

// Componenets:
import Header from './header.component.js';
import CartInfo from './cartinfo.component.js';
import MainContent from './mainContent.component.js';
import Footer from './footer.component.js';
import Modal from './modal.component.js';

// Util function
import {
  loadProducts
} from './ajaxHelper.js';

class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inactiveTime: 0,
      cart: {
        'KeyboardCombo': 1,
        'Mice': 1,
        'PC1': 1
      },
      isModalOpen: false,
      products: this.props.products,
      isUpdated: false // Only become true when Ajax's call is successful
    };

    // Bind Functions to this App
    this.setInactiveTime = this.setInactiveTime.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setProducts = this.setProducts.bind(this);
    this.updateProducts = this.updateProducts.bind(this)
    this.resetIsUpdated = this.resetIsUpdated.bind(this);
  }

  // Update State's inactiveTimer and notify user when time limit is reached
  tick() {
    let inactiveTime = this.state.inactiveTime;
    inactiveTime += 1000;
    if (inactiveTime >= this.props.timeLimit) {
      inactiveTime = 0;
      alert("Hey there! Are you still planning to buy something?");
    }
    this.setInactiveTime(inactiveTime);
  }

  // Start the inactiveTimer after first render
  componentDidMount() {
    // this.interval = setInterval(
    //   () => this.tick(),
    //   1000);

  }

  // Stop the inactiveTimer after remove this app
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // UTIL METHODS
  isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  // Remove a product from the cart
  removeFromCart(productName) {
    let cart = this.state.cart;
    if (!(productName in cart)) {
      alert('You have not purchased ' + productName);
      return;
    }
    if (cart[productName] > 0) {
      cart[productName]--;
    }
    if (cart[productName] <= 0) {
      delete(cart[productName]);
    }
    this.setState({
      inactiveTime: 0,
      cart: cart
    });
  }

  // Add a product into the cart
  addToCart(productName) {
    const products = this.props.products;
    let cart = this.state.cart;
    if (!(productName in cart)) {
      cart[productName] = 1;
    } else if (cart[productName] >= products[productName].quantity) {
      alert('Your order is over our supply.');
      return;
    } else {
      cart[productName]++;
    }

    this.setState({
      inactiveTime: 0,
      cart: cart
    });
  }

  // Return total Cost from current's State's cart
  getTotalCost(cart, products) {
    let totalCost = 0;
    for (let productName in cart) {
      totalCost += (cart[productName] * products[productName].price);
    }
    return totalCost;
  }

  // Set State's inactive time to given value
  setInactiveTime(value) {
    this.setState({
      inactiveTime: value
    });
  }

  // Close Modal UI
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  // Open Modal UI
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  /**
  Update State's products and State's cart with the updated products from server
  param: products - updated Products from server
  **/
  setProducts(products) {
    this.setState(function(prevState) {
      const prevProducts = prevState.products;
      let cart = prevState.cart;

      // Update cart:
      for (let productName in cart) {
        if (cart[productName] > products[productName].quantity) {
          if (cart[productName] <= 0) {
            delete(cart[productName]);
          } else {
            cart[productName] = products[productName].quantity;
          }
        }
      }
      return {
        products: products,
        cart: cart,
        isUpdated: true
      };
    }.bind(this));
  }

  // Re-set isUpdated status after successful ajax and render
  resetIsUpdated() {
    this.setState({
      isUpdated: false
    });
  }

  // Return String explaining list of changes between old cart and new cart
  getCartChange(cart, prevProducts, newProducts) {
    let totalDiff = '';
    for (let productName in cart) {
      totalDiff += this.getProductInfoChange(productName, prevProducts[productName], newProducts[productName]);
    };
    totalDiff += "new TotalCost is " + this.getTotalCost(cart, newProducts) + '.\n';
    return totalDiff;
  }

  // Return String explaining list of changes between old products and new products
  getProductsChange(prevProducts, newProducts) {
    let totalDiff = '';
    for (let productName in newProducts) {
      totalDiff += this.getProductInfoChange(productName, prevProducts[productName], newProducts[productName]);
    }
    return totalDiff;
  }


  // Return String explaining the difference between old product and new product with the same name
  // Return '' if there is no change
  getProductInfoChange(productName, prevProduct, newProduct) {
    var totalChange = '';

    //Check for price change
    if (prevProduct.price !== newProduct.price) {
      totalChange += 'price change from ' + prevProduct.price + ' to ' + newProduct.price + '\n';
    };

    // Check for quantity change
    if (prevProduct.quantity !== newProduct.quantity) {
      totalChange += 'quantity change from ' + prevProduct.quantity + ' to ' + newProduct.quantity + '\n';
    };

    if (totalChange.length !== 0) {
      return (productName + ':  ' + totalChange + '\n');
    };

    return totalChange;
  }

  updateProducts() {
    // Make Ajax to retrieve latest products
    loadProducts(this.props.serverURL, 5, this.setProducts);
    console.log('after');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('MAIN PrevState: ' + prevState.isUpdated);
    console.log('MAIN Current: ' + this.state.isUpdated);
  }

  render() {
    console.log('main render');
    return (
      <div id="shoppingApp">
        {this.state.isModalOpen? 
          <Modal 
            products={this.state.products}
            cart={this.state.cart}
            getTotalCost={this.getTotalCost}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            closeModal={this.closeModal}
            serverURL={this.props.serverURL}
            setProducts={this.setProducts}
            getProductsChange={this.getProductsChange}
            getCartChange={this.getCartChange}
            getProductInfoChange={this.getProductInfoChange}
            getTotalCost={this.getTotalCost}
            isUpdated={this.state.isUpdated}
            resetIsUpdated={this.resetIsUpdated}
          /> 
          : null
        }
        <Header />
        <CartInfo 
          cart={this.state.cart} 
          products={this.state.products}
          setInactiveTime ={this.setInactiveTime}
          openModal={this.openModal}
          getTotalCost={this.getTotalCost}
        />
        <MainContent 
          products={this.state.products} 
          cart={this.state.cart}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
        <Footer 
          inactiveTime={this.state.inactiveTime}
        />
      </div>
    );
  }
}


var products = {
  "KeyboardCombo": {
    "price": 21,
    "quantity": 10,
    "url": "images/KeyboardCombo_$40.png"
  },
  "Mice": {
    "price": 7,
    "quantity": 40,
    "url": "images/Mice_$20.png"
  },
  "PC1": {
    "price": 420,
    "quantity": 42,
    "url": "images/PC1_$350.png"
  },
  "PC2": {
    "price": 374,
    "quantity": 8,
    "url": "images/PC2_$400.png"
  },
  "PC3": {
    "price": 346,
    "quantity": 9,
    "url": "images/PC3_$300.png"
  },
  "Tent": {
    "price": 40,
    "quantity": 9,
    "url": "images/Tent_$100.png"
  },
  "Box1": {
    "price": 5,
    "quantity": 5,
    "url": "images/Box1_$10.png"
  },
  "Box2": {
    "price": 6,
    "quantity": 4,
    "url": "images/Box2_$5.png"
  },
  "Clothes1": {
    "price": 29,
    "quantity": 6,
    "url": "images/Clothes1_$20.png"
  },
  "Clothes2": {
    "price": 23,
    "quantity": 5,
    "url": "images/Clothes2_$30.png"
  },
  "Jeans": {
    "price": 32,
    "quantity": 2,
    "url": "images/Jeans_$50.png"
  },
  "Keyboard": {
    "price": 16,
    "quantity": 7,
    "url": "images/Keyboard_$20.png"
  }
};


// USER INPUT
var timeLimit = 10000;
var serverURL = 'https://cpen400a.herokuapp.com/products';
var numAttemps = 5;

ReactDOM.render(
  <ShoppingApp 
          products={products}
          timeLimit={timeLimit}
          serverURL={serverURL}
        />,
  document.getElementById('root')
);

// loadProducts(serverURL, numAttemps,
//   (products) => {
//     ReactDOM.render(
//       <ShoppingApp 
//           products={products}
//           timeLimit={timeLimit}
//           serverURL={serverURL}
//         />,
//       document.getElementById('root')
//     );
//   }, 5000);