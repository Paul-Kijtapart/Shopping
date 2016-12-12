"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ShoppingApp > MainContent > ProductList > ProductItem
var ProductItem = function (_React$Component) {
  _inherits(ProductItem, _React$Component);

  function ProductItem(props) {
    _classCallCheck(this, ProductItem);

    var _this = _possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).call(this, props));

    _this.addToCart = _this.addToCart.bind(_this);
    _this.removeFromCart = _this.removeFromCart.bind(_this);
    return _this;
  }

  _createClass(ProductItem, [{
    key: "addToCart",
    value: function addToCart() {
      // Update cart && Re-set inactivetime
      this.props.onCartAdded();
    }
  }, {
    key: "removeFromCart",
    value: function removeFromCart() {
      // Update cart && Re-set inactivetime
      this.props.onCartRemoved();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        React.createElement("img", { className: "product", src: this.props.url }),
        React.createElement(
          "div",
          { className: "addOrRemove" },
          React.createElement(
            "button",
            { className: "add", onClick: this.addToCart },
            " Add "
          ),
          React.createElement(
            "button",
            { className: "remove", onClick: this.removeFromCart },
            " Remove "
          ),
          React.createElement("img", { className: "cart", src: "images/cart.png" })
        ),
        React.createElement(
          "div",
          { className: "price" },
          "$",
          this.props.price
        ),
        React.createElement(
          "div",
          { className: "name" },
          this.props.name
        )
      );
    }
  }]);

  return ProductItem;
}(React.Component);

// APP


var ShoppingApp = function (_React$Component2) {
  _inherits(ShoppingApp, _React$Component2);

  function ShoppingApp(props) {
    _classCallCheck(this, ShoppingApp);

    var _this2 = _possibleConstructorReturn(this, (ShoppingApp.__proto__ || Object.getPrototypeOf(ShoppingApp)).call(this, props));

    _this2.state = {
      inactiveTime: 0,
      cart: {}
    };

    _this2.handleAddToCart = _this2.handleAddToCart.bind(_this2);
    _this2.handleRemoveFromCart = _this2.handleRemoveFromCart.bind(_this2);
    return _this2;
  }

  _createClass(ShoppingApp, [{
    key: "tick",
    value: function tick() {
      // update inactiveTime
      this.setState(function (prevState, props) {
        return {
          inactiveTime: prevState.inactiveTime + 1000
        };
      });
      console.log(this.state.inactiveTime);

      // if inactiveTime hit 30seconds, alert user
      if (this.state.inactiveTime >= this.props.timer) {
        this.setState({
          inactiveTime: 0
        });
        alert("Hey there! Are you still planning to buy something?");
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.interval = setInterval(function () {
        return _this3.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleRemoveFromCart",
    value: function handleRemoveFromCart() {
      this.setState({
        inactiveTime: 0
      });
    }
  }, {
    key: "handleAddToCart",
    value: function handleAddToCart() {
      this.setState({
        inactiveTime: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(MainContent, {
          products: this.props.products,
          onCartAdded: this.handleAddToCart,
          onCartRemoved: this.handleRemoveFromCart
        }),
        React.createElement(Footer, null)
      );
    }
  }]);

  return ShoppingApp;
}(React.Component);

// ShoppingApp > MainContent > ProductList


var ProductList = function (_React$Component3) {
  _inherits(ProductList, _React$Component3);

  function ProductList() {
    _classCallCheck(this, ProductList);

    return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
  }

  _createClass(ProductList, [{
    key: "render",
    value: function render() {
      var products = this.props.products;
      // console.log(products);

      var productItems = [];

      for (var productName in products) {
        var product = products[productName];
        productItems.push(React.createElement(ProductItem, {
          key: productName,
          name: productName,
          price: product.price,
          url: product.url,
          quantity: product.quantity,
          onCartAdded: this.props.onCartAdded,
          onCartRemoved: this.props.onCartRemoved
        }));
      }

      // console.log(productItems);

      // Convert original products to React product

      return React.createElement(
        "div",
        { id: "productList" },
        React.createElement(
          "ul",
          null,
          productItems
        )
      );
    }
  }]);

  return ProductList;
}(React.Component);

// ShoppingApp > MainContent > Navigation


var Navigation = function (_React$Component4) {
  _inherits(Navigation, _React$Component4);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "navigationMenu" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "All Items"
          ),
          React.createElement(
            "li",
            null,
            "Books"
          ),
          React.createElement(
            "li",
            null,
            "Clothing"
          ),
          React.createElement(
            "li",
            null,
            "Tech"
          ),
          React.createElement(
            "li",
            null,
            "Gifts"
          ),
          React.createElement(
            "li",
            null,
            "Stationary"
          ),
          React.createElement(
            "li",
            null,
            "Supplies"
          )
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

// ShoppingApp > MainContent


var MainContent = function (_React$Component5) {
  _inherits(MainContent, _React$Component5);

  function MainContent() {
    _classCallCheck(this, MainContent);

    return _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).apply(this, arguments));
  }

  _createClass(MainContent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "mainContent" },
        React.createElement(Navigation, null),
        React.createElement(ProductList, {
          products: this.props.products,
          onCartAdded: this.props.onCartAdded,
          onCartRemoved: this.props.onCartRemoved
        })
      );
    }
  }]);

  return MainContent;
}(React.Component);

// ShoppingApp > Header


var Header = function (_React$Component6) {
  _inherits(Header, _React$Component6);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "header" },
        React.createElement(
          "div",
          { id: "logo" },
          "Bookstore"
        ),
        React.createElement(
          "div",
          { id: "welcomeBanner" },
          "Welcome to the UBC Bookstore!"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

// ShoppingApp > Footer


var Footer = function (_React$Component7) {
  _inherits(Footer, _React$Component7);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "footer" },
        "Copyright \xA9 2016"
      );
    }
  }]);

  return Footer;
}(React.Component);

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
var timer = 10000;

ReactDOM.render(React.createElement(ShoppingApp, {
  products: products,
  timer: timer
}), document.getElementById('root'));
