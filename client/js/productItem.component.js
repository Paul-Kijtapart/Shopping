import React from 'react';

// ShoppingApp > MainContent > ProductList > ProductItem
class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    this.prevPrice = this.props.price;
  }

  // Add this product to the cart
  addToCart() {
    // Update cart && Re-set inactivetime
    this.props.addToCart(this.props.name);
  }

  // Remove this product from the cart
  removeFromCart() {
    // Update cart && Re-set inactivetime
    this.props.removeFromCart(this.props.name);
  }

  render() {
    const isCartEmpty = this.props.isCartEmpty;
    let price = this.props.price;

    if (this.prevPrice && this.prevPrice !== price) {
      price = <div className='price'> ${this.prevPrice} => ${price}</div>;
    } else {
      price = <div className='price'> ${price} </div>
    }

    return (
      <li className="productItem">
          <img className="product" src={this.props.url} />
          <div className="addOrRemove">
              <button className="add" onClick={this.addToCart}> Add </button>
              {!isCartEmpty && <button className="remove" onClick={this.removeFromCart}> Remove </button>}
              <img className="cart" src="images/cart.png" />
          </div>
          {price}
          <div className="name">{this.props.name}</div>
          {this.props.children}
      </li>
    );
  }
}

class ProductItemView extends React.Component {

  // Return true if this item's tags matches any active tags in the activeCategory
  isCategoryActive(category, activeCategory) {
    for (let activeTag of activeCategory) {
      for (let tag of category) {
        if (tag === activeTag) {
          return true;
        }
      }
    }
    return false;
  }

  render() {
    const category = this.props.category;
    const activeCategory = this.props.activeCategory;
    const isEmpty = activeCategory.length === 0 ? true : false;
    let productItem = <ProductItem {...this.props} />
    let itemDisplayed = isEmpty || this.isCategoryActive(category, activeCategory);
    productItem = itemDisplayed ? productItem : null;

    return productItem;
  }
}

class CartItem extends React.Component {
  render() {
    const quantityOrdered = this.props.quantityOrdered;
    const quantityOrderedView = <p> # Ordered: {quantityOrdered} </p>;

    return (
      <ProductItem
        {...this.props}
      >
      { quantityOrdered? quantityOrderedView : null}
      </ProductItem>
    );
  }
}


export {
  ProductItem,
  ProductItemView,
  CartItem
};