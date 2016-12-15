import React from 'react';

class CartInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleCartClick = this.handleCartClick.bind(this);
  }

  // Re-set the inactiveTime
  handleCartClick() {
    // this.props.setInactiveTime();
    // this.props.openModal();
    this.props.updateProducts();

  }

  render() {
    const cart = this.props.cart;
    const products = this.props.products;
    const cartLen = cart.length;
    const totalCost = this.props.getTotalCost(cart, products);

    return (
      <div id="cartInfo">
        <button onClick={this.handleCartClick}> Cart (${totalCost}) </button>
      </div>
    );
  }
}

export default CartInfo;