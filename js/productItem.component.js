import React from 'react';

// ShoppingApp > MainContent > ProductList > ProductItem
class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart() {
    // Update cart && Re-set inactivetime
    this.props.addToCart(this.props.name);
  }

  removeFromCart() {
    // Update cart && Re-set inactivetime
    this.props.removeFromCart(this.props.name);
  }

  render() {
    const isCartEmpty = this.props.isCartEmpty;

    return (
      <li>
          <img className="product" src={this.props.url} />
          <div className="addOrRemove">
              <button className="add" onClick={this.addToCart}> Add </button>
              {!isCartEmpty && <button className="remove" onClick={this.removeFromCart}> Remove </button>}
              <img className="cart" src="images/cart.png" />
          </div>
          <div className="price">
            ${this.props.price}
          </div>
          <div className="name">{this.props.name}</div>
      </li>
    );
  }
}


export default ProductItem;