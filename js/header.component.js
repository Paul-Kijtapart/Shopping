import React from 'react';

// ShoppingApp > Header
class Header extends React.Component {
  render() {
    return (
      <div id="header">
            <div id="logo">
                Bookstore
            </div>
            <div id="welcomeBanner">
                Welcome to the UBC Bookstore!
            </div>
         </div>
    );
  }
}

export default Header;