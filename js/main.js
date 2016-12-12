// ShoppingApp > MainContent > ProductList > ProductItem
class ProductItem extends React.Component {
  render() {
    return (
      <li>
      </li>
    );
  }
}

// ShoppingApp > MainContent > ProductList
class ProductList extends React.Component {
  render() {
    return (
      <div id="productList">
                <ul>
                  <li>
                        <img className="product" src={"images/Box1_$10.png"} />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src={"images/cart.png"} />
                        </div>
                        <div className="price">
                            $10
                        </div>
                        <div className="name">Box1</div>
                    </li>
                    <li>
                        <img className="product" src={"images/Box2_$5.png"} />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src={"images/cart.png"} />
                        </div>
                        <div className="price">
                            $5
                        </div>
                        <div className="name">Box2</div>
                    </li>
                    <li>
                        <img className="product" src={"images/Clothes1_$20.png"} />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src={"images/cart.png"} />
                        </div>
                        <div className="price">
                            $20
                        </div>
                        <div className="name">Clothes1</div>
                    </li>
                    <li>
                        <img className="product" src="images/Clothes2_$30.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $30
                        </div>
                        <div className="name">Clothes2</div>
                    </li>
                    <li>
                        <img className="product" src="images/Jeans_$50.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $50
                        </div>
                        <div className="name">Jeans</div>
                    </li>
                    <li>
                        <img className="product" src="images/Keyboard_$20.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $20
                        </div>
                        <div className="name">Keyboard</div>
                    </li>
                    <li>
                        <img className="product" src="images/KeyboardCombo_$40.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $40
                        </div>
                        <div className="name">KeyboardCombo</div>
                    </li>
                    <li>
                        <img className="product" src="images/Mice_$20.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $20
                        </div>
                        <div className="name">Mice</div>
                    </li>
                    <li>
                        <img className="product" src="images/PC1_$350.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $350
                        </div>
                        <div className="name">PC1</div>
                    </li>
                    <li>
                        <img className="product" src="images/PC2_$400.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $400
                        </div>
                        <div className="name">PC2_</div>
                    </li>
                    <li>
                        <img className="product" src="images/PC3_$300.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $300
                        </div>
                        <div className="name">PC3</div>
                    </li>
                    <li>
                        <img className="product" src="images/Tent_$100.png" />
                        <div className="addOrRemove">
                            <button className="add"> Add </button>
                            <button className="remove"> Remove </button>
                            <img className="cart" src="images/cart.png" />
                        </div>
                        <div className="price">
                            $100
                        </div>
                        <div className="name">Tent</div>
                    </li>
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
        <ProductList />
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
        <MainContent />
        <Footer />
      </div>
    );
  }
}

var products = {
  "KeyboardCombo": {
    "price": 31,
    "quantity": 10,
    "url": "https://cpen400a.herokuapp.com/images/KeyboardCombo.png"
  },
  "Mice": {
    "price": 7,
    "quantity": 9,
    "url": "https://cpen400a.herokuapp.com/images/Mice.png"
  },
  "PC1": {
    "price": 348,
    "quantity": 0,
    "url": "https://cpen400a.herokuapp.com/images/PC1.png"
  },
  "PC2": {
    "price": 374,
    "quantity": 8,
    "url": "https://cpen400a.herokuapp.com/images/PC2.png"
  },
  "PC3": {
    "price": 346,
    "quantity": 9,
    "url": "https://cpen400a.herokuapp.com/images/PC3.png"
  },
  "Tent": {
    "price": 40,
    "quantity": 9,
    "url": "https://cpen400a.herokuapp.com/images/Tent.png"
  },
  "Box1": {
    "price": 5,
    "quantity": 5,
    "url": "https://cpen400a.herokuapp.com/images/Box1.png"
  },
  "Box2": {
    "price": 6,
    "quantity": 4,
    "url": "https://cpen400a.herokuapp.com/images/Box2.png"
  },
  "Clothes1": {
    "price": 29,
    "quantity": 6,
    "url": "https://cpen400a.herokuapp.com/images/Clothes1.png"
  },
  "Clothes2": {
    "price": 23,
    "quantity": 5,
    "url": "https://cpen400a.herokuapp.com/images/Clothes2.png"
  },
  "Jeans": {
    "price": 32,
    "quantity": 2,
    "url": "https://cpen400a.herokuapp.com/images/Jeans.png"
  },
  "Keyboard": {
    "price": 16,
    "quantity": 7,
    "url": "https://cpen400a.herokuapp.com/images/Keyboard.png"
  }
};

var cart = {
  "KeyboardCombo": 0,
  "Mice": 0,
  "PC1": 0,
  "PC2": 0,
  "PC3": 0,
  "Tent": 0,
  "Box1": 0,
  "Box2": 0,
  "Clothes1": 0,
  "Clothes2": 0,
  "Jeans": 0,
  "Keyboard": 0,
};

ReactDOM.render(
  <ShoppingApp />,
  document.getElementById('root')
);