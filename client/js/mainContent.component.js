import React from 'react';

import Navigation from './navigation.component.js';
import {
  ProductList
} from './productList.component.js';
import {
  ProductItem
} from './productItem.component.js';

// ShoppingApp > MainContent
class MainContent extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <Navigation 
          category={this.props.category}
          selectCategory= {this.props.selectCategory}
          removeCategory={this.props.removeCategory}
        />
        <ProductList 
          itemType={ProductItem}
          products={this.props.products}
          cart={this.props.cart}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
          category={this.props.category}
        />
      </div>
    );
  }
}


export default MainContent;