import React from 'react';

import ProductItem from './productItem.component.js';


// ShoppingApp > MainContent > ProductList
class ProductList extends React.Component {

  render() {
    const products = this.props.products;
    const cart = this.props.cart;
    const isCartEmpty = this.props.isEmpty(cart);

    let productItems = [];

    for (let productName in products) {
      let product = products[productName];
      productItems.push(
        <ProductItem 
          key={productName}
          name={productName}
          price={product.price} 
          url={product.url}
          quantity={product.quantity}
          isCartEmpty={isCartEmpty}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
        />);
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

export default ProductList;