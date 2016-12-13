import React from 'react';

class CartInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getTotalCost(cart, products) {
    let totalCost = 0;
    for (let productName in cart) {
      totalCost += (cart[productName] * products[productName].price);
    }
    return totalCost;
  }

  handleClick() {
    // Re-set the inactiveTime
    this.props.onCartView();

  }

  render() {
    const cart = this.props.cart;
    const products = this.props.products;
    const cartLen = cart.length;
    const totalCost = this.getTotalCost(cart, products);

    return (
      <div id="cartInfo">
        <button onClick={this.handleClick}> Cart (${totalCost}) </button>
      </div>
    );
  }
}

export default CartInfo;