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


// APP
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
      products: this.props.products
    };

    // Bind Functions to this 
    this.setInactiveTime = this.setInactiveTime.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setProducts = this.setProducts.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }

  tick() {
    // update inactiveTime
    let inactiveTime = this.state.inactiveTime;
    inactiveTime += 1000;
    if (inactiveTime >= this.props.timeLimit) {
      inactiveTime = 0;
      alert("Hey there! Are you still planning to buy something?");
    }

    console.log(inactiveTime);

    this.setInactiveTime(inactiveTime);
  }

  componentDidMount() {
    // this.interval = setInterval(
    //   () => this.tick(),
    //   1000);

  }

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

  // CART METHODS
  removeFromCart(productName) {
    let cart = this.state.cart;
    if ((productName in cart) && cart[productName] > 0) {
      cart[productName]--;
    }

    // If number of ordered product hit 0, remove it from cart
    if (cart[productName] <= 0) {
      delete(cart[productName]);
    }

    this.setState({
      inactiveTime: 0,
      cart: cart
    });

    console.log("removeFromCart");
    console.log(cart);
  }

  // Cart['productName'] = quantities ordered
  addToCart(productName) {
    const products = this.props.products;
    let cart = this.state.cart;
    if (!(productName in cart)) {
      cart[productName] = 1;
    } else if (cart[productName] >= products[productName].quantity) {
      // the amount of ordered items reach maximum
      alert('Your order is over our supply.');
      return;
    } else {
      // the amount of ordered item is below maximum
      cart[productName]++;
    }

    this.setState({
      inactiveTime: 0,
      cart: cart
    });
    console.log("addToCart");
    console.log(cart);
  }

  getTotalCost(cart, products) {
    let totalCost = 0;
    for (let productName in cart) {
      totalCost += (cart[productName] * products[productName].price);
    }
    return totalCost;
  }

  // TIME METHODS
  setInactiveTime(value) {
    this.setState({
      inactiveTime: value
    });
  }

  // MODAL METHODS
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  // Products METHODS
  setProducts(products) {
    this.setState(function(prevState) {
      const prevProducts = prevState.products;
      let cart = prevState.cart;

      const cartDiff = this.updateCart(cart, prevProducts, products);
      console.log('cartDiff: \n' + cartDiff);
      const productsDiff = this.getProductsChange(prevProducts, products);


      // console.log('totalDiff is ' + this.totalDiff);
      return {
        products: products,
        cart: cart
      };
    }.bind(this));
  }

  // Return the different from prevVersion to newVersion
  updateCart(cart, prevProducts, newProducts) {
    let totalDiff = '';
    for (let productName in cart) {
      totalDiff += this.getProductInfoChange(productName, prevProducts[productName], newProducts[productName]);
      totalDiff += '\n';

      // Update cart:
      if (cart[productName] > newProducts[productName].quantity) {
        cart[productName] = newProducts[productName].quantity;
      }
    };

    totalDiff += "new TotalCost is " + this.getTotalCost(cart, newProducts) + '.\n';
    return totalDiff;
  }

  getProductsChange(prevProducts, newProducts) {
    let totalDiff = '';
    for (let productName in newProducts) {
      totalDiff += this.getProductInfoChange(productName, prevProducts[productName], newProducts[productName]);
      totalDiff += '\n';
    }
    return totalDiff;
  }


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

  render() {
    return (
      <div id="shoppingApp">
        {this.state.isModalOpen? 
          <Modal 
            products={this.state.products}
            cart={this.state.cart}
            getTotalCost={this.getTotalCost}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            isEmpty={this.isEmpty}
            closeModal={this.closeModal}
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
          updateProducts={this.updateProducts}
        />
        <MainContent 
          products={this.state.products} 
          cart={this.state.cart}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          isEmpty={this.isEmpty}
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