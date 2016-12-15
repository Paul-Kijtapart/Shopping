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
var numAttemps = 5;

loadProducts(serverURL, numAttemps,
  (products) => {
    ReactDOM.render(
      <ShoppingApp 
          products={products}
          timeLimit={timeLimit}
          serverURL={serverURL}
        />,
      document.getElementById('root')
    );
  });

console.log('GGGGGG');