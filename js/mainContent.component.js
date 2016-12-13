import React from 'react';

import Navigation from './navigation.component.js';
import ProductList from './productList.component.js';

// ShoppingApp > MainContent
class MainContent extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <Navigation />
        <ProductList 
        products={this.props.products}
        onCartAdded={this.props.onCartAdded}
        onCartRemoved={this.props.onCartRemoved}
        />
      </div>
    );
  }
}


export default MainContent;