import React from 'react';

class CartInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getTotalCost(cart) {
    let totalCost = 0;
    for (let productName in cart) {
      totalCost += cart[productName];
    }
    return totalCost;
  }

  handleClick() {
    // There should be modal displaying all the current item
    console.log('view current cart');
  }

  render() {
    const cart = this.props.cart;
    const products = this.props.products;
    const cartLen = cart.length;
    const totalCost = this.getTotalCost(cart);

    return (
      <div id="cartInfo">
        <button onClick={this.handleClick}> Cart ${totalCost} </button>
      </div>
    );
  }
}

export default CartInfo;