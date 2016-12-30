import React from 'react';

import Navigation from './navigation.component.js';
import {
  ProductList
} from './productList.component.js';
import {
  ProductItemView
} from './productItem.component.js';

// ShoppingApp > MainContent
class MainContent extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <Navigation 
          category={this.props.category}
          addTagToCategory= {this.props.addTagToCategory}
          removeTagFromCategory={this.props.removeTagFromCategory}
          clearCategory={this.props.clearCategory}
          priceRanges={this.props.priceRanges}
          addPriceRanges={this.props.addPriceRanges}
          removePriceRanges={this.props.removePriceRanges}
          clearPriceRanges={this.props.clearPriceRanges}
          containPriceRange={this.props.containPriceRange}
        />
        <ProductList 
          itemType={ProductItemView}
          products={this.props.products}
          cart={this.props.cart}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
          category={this.props.category}
          priceRanges={this.props.priceRanges}
        />
      </div>
    );
  }
}


export default MainContent;