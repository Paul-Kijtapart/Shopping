import React from 'react';

// Util
import {
  ProductItem
} from './productItem.component.js';
import {
  isEmpty
} from './Util.js';


// ShoppingApp > MainContent > ProductList
class ProductList extends React.Component {

  render() {
    const products = this.props.products;
    const cart = this.props.cart;
    const isCartEmpty = isEmpty(cart);
    const ItemType = this.props.itemType;
    const activeCategory = this.props.category;

    let productItems = [];

    for (let productName in products) {
      let product = products[productName];
      let quantityOrdered = 0;
      if (productName in cart) {
        quantityOrdered = cart[productName];
      }
      productItems.push(
        <ItemType
          key={productName}
          name={productName}
          price={product.price} 
          url={product.url}
          quantity={product.quantity}
          category={product.category}
          quantityOrdered={quantityOrdered}
          activeCategory={activeCategory}
          isCartEmpty={isCartEmpty}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
        />
      );
    }

    return (
      <div id="productList">
                <ul>
                  {productItems}
                </ul>
      </div>
    );
  }
}

export {
  ProductList
};