import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.component.js';
import CartInfo from './cartinfo.component.js';
import MainContent from './mainContent.component.js';
import Footer from './footer.component.js';
import Modal from './modal.component.js';

// APP
class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inactiveTime: 0,
      cart: {
        'KeyboardCombo': 2,
        'Box1': 1,
        'Box2': 4
      },
      isModalOpen: false
    };

    this.handleCartView = this.handleCartView.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
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

    this.setState({
      inactiveTime: inactiveTime
    });
  }

  componentDidMount() {
    // this.interval = setInterval(
    //   () => this.tick(),
    //   1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleRemoveFromCart(productName) {
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
  handleAddToCart(productName) {
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

  handleCartView() {
    // Re-set the inactiveTime
    this.setState({
      inactiveTime: 0,
      isModalOpen: true
    });
  }

  isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  getTotalCost(cart, products) {
    let totalCost = 0;
    for (let productName in cart) {
      totalCost += (cart[productName] * products[productName].price);
    }
    return totalCost;
  }

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

  render() {
    return (
      <div id="shoppingApp">
        {this.state.isModalOpen? 
          <Modal 
            products={this.props.products}
            cart={this.state.cart}
            getTotalCost={this.getTotalCost}
            onCartAdded={this.handleAddToCart}
            onCartRemoved={this.handleRemoveFromCart}
            isEmpty={this.isEmpty}
            closeModal={this.closeModal}
          /> 
          : null
        }
        <Header />
        <CartInfo 
          cart={this.state.cart} 
          products={this.props.products}
          onCartView ={this.handleCartView}
          getTotalCost={this.getTotalCost}
        />
        <MainContent 
          products={this.props.products} 
          cart={this.state.cart}
          onCartAdded={this.handleAddToCart}
          onCartRemoved={this.handleRemoveFromCart}
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
    "price": 31,
    "quantity": 10,
    "url": "images/KeyboardCombo_$40.png"
  },
  "Mice": {
    "price": 7,
    "quantity": 9,
    "url": "images/Mice_$20.png"
  },
  "PC1": {
    "price": 348,
    "quantity": 0,
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

// { "productName" : 0 }
var cart = {};
var timeLimit = 10000;

ReactDOM.render(
  <ShoppingApp 
  products={products}
  timeLimit={timeLimit}
  />,
  document.getElementById('root')
);