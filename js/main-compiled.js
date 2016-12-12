"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ShoppingApp > MainContent > ProductList > ProductItem
var ProductItem = function (_React$Component) {
    _inherits(ProductItem, _React$Component);

    function ProductItem() {
        _classCallCheck(this, ProductItem);

        return _possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).apply(this, arguments));
    }

    _createClass(ProductItem, [{
        key: "render",
        value: function render() {
            return React.createElement("li", null);
        }
    }]);

    return ProductItem;
}(React.Component);

// ShoppingApp > MainContent > ProductList


var ProductList = function (_React$Component2) {
    _inherits(ProductList, _React$Component2);

    function ProductList() {
        _classCallCheck(this, ProductList);

        return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
    }

    _createClass(ProductList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "productList" },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Box1_$10.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$10"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Box1"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Box2_$5.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$5"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Box2"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Clothes1_$20.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$20"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Clothes1"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Clothes2_$30.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$30"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Clothes2"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Jeans_$50.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$50"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Jeans"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Keyboard_$20.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$20"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Keyboard"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/KeyboardCombo_$40.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$40"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "KeyboardCombo"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Mice_$20.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$20"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Mice"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/PC1_$350.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$350"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "PC1"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/PC2_$400.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$400"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "PC2_"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/PC3_$300.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$300"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "PC3"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { className: "product", src: "images/Tent_$100.png" }),
                        React.createElement(
                            "div",
                            { className: "addOrRemove" },
                            React.createElement(
                                "button",
                                { className: "add" },
                                " Add "
                            ),
                            React.createElement(
                                "button",
                                { className: "remove" },
                                " Remove "
                            ),
                            React.createElement("img", { className: "cart", src: "images/cart.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "price" },
                            "$100"
                        ),
                        React.createElement(
                            "div",
                            { className: "name" },
                            "Tent"
                        )
                    )
                )
            );
        }
    }]);

    return ProductList;
}(React.Component);

// ShoppingApp > MainContent > Navigation


var Navigation = function (_React$Component3) {
    _inherits(Navigation, _React$Component3);

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


var MainContent = function (_React$Component4) {
    _inherits(MainContent, _React$Component4);

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
                React.createElement(ProductList, null)
            );
        }
    }]);

    return MainContent;
}(React.Component);

// ShoppingApp > Header


var Header = function (_React$Component5) {
    _inherits(Header, _React$Component5);

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


var Footer = function (_React$Component6) {
    _inherits(Footer, _React$Component6);

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

var ShoppingApp = function (_React$Component7) {
    _inherits(ShoppingApp, _React$Component7);

    function ShoppingApp() {
        _classCallCheck(this, ShoppingApp);

        return _possibleConstructorReturn(this, (ShoppingApp.__proto__ || Object.getPrototypeOf(ShoppingApp)).apply(this, arguments));
    }

    _createClass(ShoppingApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(MainContent, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return ShoppingApp;
}(React.Component);

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
    "Keyboard": 0
};

ReactDOM.render(React.createElement(ShoppingApp, null), document.getElementById('root'));
