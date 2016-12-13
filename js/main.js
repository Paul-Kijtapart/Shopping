import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.component.js';
import MainContent from './mainContent.component.js';
import Footer from './footer.component.js';

// APP
class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inactiveTime: 0,
      cart: {}
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  tick() {
    // update inactiveTime
    let inactiveTime = this.state.inactiveTime;
    inactiveTime += 1000;
    if (inactiveTime >= this.props.timeLimit) {
      inactiveTime = 0;
      alert("Hey there! Are you still planning to buy something?");
    }

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

    this.setState({
      inactiveTime: 0,
      cart: cart
    });

    console.log("removeFromCart");
    console.log(cart);
  }

  handleAddToCart(productName) {
    let cart = this.state.cart;
    if (!(productName in cart)) {
      cart[productName] = 1;
    } else {
      cart[productName]++;
    }

    this.setState({
      inactiveTime: 0,
      cart: cart
    });

    console.log("addToCart");
    console.log(cart);
    // debugger;
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent 
        products={this.props.products} 
        onCartAdded={this.handleAddToCart}
        onCartRemoved={this.handleRemoveFromCart}
        />
        <Footer />
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