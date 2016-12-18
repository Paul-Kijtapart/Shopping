import React from 'react';

// ShoppingApp > MainContent > Navigation
class Navigation extends React.Component {
  render() {
    return (
      <div id="navigationMenu">
          <ul>
              <li>All Items</li>
              <li>Books</li>
              <li>Clothing</li>
              <li>Tech</li>
              <li>Gifts</li>
              <li>Stationary</li>
              <li>Supplies</li>
          </ul>
      </div>
    );
  }
}


export default Navigation;