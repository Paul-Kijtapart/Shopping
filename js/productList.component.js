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
          quantityOrdered={quantityOrdered}
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