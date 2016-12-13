import React from 'react';

import ProductItem from './productItem.component.js';


// ShoppingApp > MainContent > ProductList
class ProductList extends React.Component {
  render() {
    const products = this.props.products;
    // console.log(products);

    let productItems = [];

    for (let productName in products) {
      let product = products[productName];
      productItems.push(<ProductItem 
      key={productName}
      name={productName}
      price={product.price} 
      url={product.url}
      quantity={product.quantity}
      onCartAdded={this.props.onCartAdded}
      onCartRemoved={this.props.onCartRemoved}
      />);
    }

    // console.log(productItems);

    // Convert original products to React product

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