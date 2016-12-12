// ShoppingApp > MainContent > ProductList > ProductItem
class ProductItem extends React.Component {
  render() {
    return (
      <li>
          <img className="product" src={this.props.url} />
          <div className="addOrRemove">
              <button className="add"> Add </button>
              <button className="remove"> Remove </button>
              <img className="cart" src="images/cart.png" />
          </div>
          <div className="price">
            ${this.props.price}
          </div>
          <div className="name">{this.props.name}</div>
      </li>
    );
  }
}

// ShoppingApp > MainContent > ProductList
class ProductList extends React.Component {
  render() {
    const products = this.props.products;
    console.log(products);

    let productItems = [];

    for (let productName in products) {
      let product = products[productName];
      productItems.push(<ProductItem 
      key={productName}
      name={productName}
      price={product.price} 
      url={product.url}
      quantity={product.quantity}
      />);
    }

    console.log(productItems);

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


// ShoppingApp > MainContent
class MainContent extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <Navigation />
        <ProductList products={this.props.products}/>
      </div>
    );
  }
}


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

// ShoppingApp > Footer
class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
            Copyright &copy; 2016
      </div>
    );
  }
}


class ShoppingApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent products={this.props.products} />
        <Footer />
      </div>
    );
  }
}

var products = {
  "KeyboardCombo": {
    "price": 31,
    "quantity": 10,
    "url": "images/KeyboardCombo_$40.png"
  },
  "Mice": {
    "price": 7,
    "quantity": 9,
    "url": "images/Mice_$20.png"
  },
  "PC1": {
    "price": 348,
    "quantity": 0,
    "url": "images/PC1_$350.png"
  },
  "PC2": {
    "price": 374,
    "quantity": 8,
    "url": "images/PC2_$400.png"
  },
  "PC3": {
    "price": 346,
    "quantity": 9,
    "url": "images/PC3_$300.png"
  },
  "Tent": {
    "price": 40,
    "quantity": 9,
    "url": "images/Tent_$100.png"
  },
  "Box1": {
    "price": 5,
    "quantity": 5,
    "url": "images/Box1_$10.png"
  },
  "Box2": {
    "price": 6,
    "quantity": 4,
    "url": "images/Box2_$5.png"
  },
  "Clothes1": {
    "price": 29,
    "quantity": 6,
    "url": "images/Clothes1_$20.png"
  },
  "Clothes2": {
    "price": 23,
    "quantity": 5,
    "url": "images/Clothes2_$30.png"
  },
  "Jeans": {
    "price": 32,
    "quantity": 2,
    "url": "images/Jeans_$50.png"
  },
  "Keyboard": {
    "price": 16,
    "quantity": 7,
    "url": "images/Keyboard_$20.png"
  }
};

// { "productName" : 0 }
var cart = {};

ReactDOM.render(
  <ShoppingApp products={products}/>,
  document.getElementById('root')
);