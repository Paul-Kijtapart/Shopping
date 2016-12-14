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

    // Bind Functions to this 
    this.setInactiveTime = this.setInactiveTime.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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

  // Set the state's inactiveTime to given value
  setInactiveTime(value) {
    this.setState({
      inactiveTime: value
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
          products={this.props.products}
          setInactiveTime ={this.setInactiveTime}
          openModal={this.openModal}
          getTotalCost={this.getTotalCost}
        />
        <MainContent 
          products={this.props.products} 
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

// USER INPUT
var timeLimit = 10000;
var serverURL = 'https://cpen400a.herokuapp.com/products';

// START APP
var xhr = new XMLHttpRequest();

xhr.open('GET', serverURL);
xhr.responseType = 'json';

xhr.onload = function() {
  if (xhr.status === 200) {
    if (xhr.response) {
      console.log('Successfully Received response in json format');
      var products = xhr.response;

      // START APP
      ReactDOM.render(
        <ShoppingApp 
          products={products}
          timeLimit={timeLimit}
        />,
        document.getElementById('root')
      );
    } else {
      console.log('Successfully Received response NOT json format');
    }
  } else {
    console.log(xhr);
    console.log(xhr.status);
  }
};

xhr.onprogress = function(e) {
  // e should have the total number of bytes to transfer 
  // as well as the number of bytes transferred so far in the event's total and loaded fields.
  console.log('on progress');
  if (e.lengthComputable) {
    var percentComplete = e.loaded / e.total;
    console.log('percentComplete: ' + percentComplete);
    // ...
  } else {
    // Unable to compute progress information since the total size is unknown
    console.log('Unable to compute progress information since the total size is unknown');
  }
};

// SET UP error case
xhr.timeout = 10000;
xhr.ontimeout = function() {
  console.log('ajax is timed out.');
};

xhr.onerror = function() {
  console.log('ajax has error.');
};

xhr.onabort = function() {
  console.log('ajax canceled by user.');
};

xhr.send();