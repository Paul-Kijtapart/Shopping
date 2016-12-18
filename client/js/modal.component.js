import React from 'react';

// Componenets
import {
	ProductList
} from './productList.component.js';
import {
	CartItem
} from './productItem.component.js';

// Utils
import {
	loadProducts
} from './ajaxHelper.js';

class ModalFooter extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheckout = this.handleCheckout.bind(this);
	}

	// Send Ajax to server to validate products'price and quantity 
	// Notify clients of any changes on products and cart
	handleCheckout() {
		loadProducts(this.props.serverURL, 5, this.props.setProducts);
	}

	render() {
		return (
			<div className="modalFooter">
				<p> Footer </p>
				<button 
					id="checkout"
					onClick={this.handleCheckout}
				> 
				Checkout 
				</button>
			</div>
		);
	}
}

class ModalHeader extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	// Close Modal when user click X on right top
	handleClick() {
		this.props.closeModal();
	}

	render() {
		const cart = this.props.cart;
		const products = this.props.products;
		const totalCost = this.props.getTotalCost(cart, products);
		return (
			<div className="modalHeader">
				<p id="title"> Cart Info </p>
				<p id="cost"> Total Cost : {totalCost} </p>
				<button className="closeModal" onClick={this.handleClick}> X </button>
			</div>
		);
	}
}

class ModalBody extends React.Component {

	// On Ajax Update:
	// Calculate the difference before old products and next products
	// Notify client on how it affects the cart
	componentWillReceiveProps(nextProps) {
		// console.log('BEFORE oldProps isUpdated status: ' + this.props.isUpdated);
		// console.log('BEFORE nextProps isUpdated status: ' + nextProps.isUpdated);
		if (nextProps.isUpdated) {
			this.props.resetIsUpdated();
			const prevProducts = this.props.products;
			const cart = this.props.cart;
			this.cartDiff = this.props.getCartChange(cart, prevProducts, nextProps.products);
			this.productDiff = this.props.getProductsChange(prevProducts, nextProps.products);
		}
	}

	// Notify Users of the change and ask if he still want to continue the purchase
	componentDidUpdate(prevProps, prevState) {
		// console.log('AFTER: prevProps isUpdated status: ' + prevProps.isUpdated);
		// console.log('AFTER: this isUpdated status ' + this.props.isUpdated);
		if (this.props.isUpdated) {
			const message = this.cartDiff + ' \n ' + this.productDiff;
			let status = confirm(message);
			if (status) {
				this.props.closeModal();
			};
		}
	}

	render() {
		const products = this.props.products;
		const cart = this.props.cart;
		const isUpdated = this.props.isUpdated;
		let orderItems = {};

		for (let productName in cart) {
			orderItems[productName] = products[productName];
		}
		return (
			<div className="modalBody">
				<ProductList 
					itemType={CartItem}
					products={orderItems}
			        cart={cart}
			        addToCart={this.props.addToCart}
			        removeFromCart={this.props.removeFromCart}
				/>
				{isUpdated ||	
				<div id="updateInfo">
					<p> {this.cartDiff? 'Cart has changed: \n' + this.cartDiff : null} </p>
					<p> {this.productDiff? 'Updated products: \n' + this.productDiff  : null}  </p>
				</div>}
			</div>
		);
	}
}

class ModalContent extends React.Component {
	render() {
		return (
			<div className="modalContent">
				<ModalHeader 
					products={this.props.products}
			        cart={this.props.cart}
			        getTotalCost={this.props.getTotalCost}
			        closeModal={this.props.closeModal}
				/>
				<ModalBody 
					products={this.props.products}
			        cart={this.props.cart}
			        addToCart={this.props.addToCart}
					removeFromCart={this.props.removeFromCart}
					closeModal={this.props.closeModal}
					getProductsChange={this.props.getProductsChange}
					getCartChange={this.props.getCartChange}
					getProductInfoChange={this.props.getProductInfoChange}
					getTotalCost={this.props.getTotalCost}
					resetIsUpdated={this.props.resetIsUpdated}
					isUpdated={this.props.isUpdated}
				/>
				<ModalFooter 
					closeModal={this.props.closeModal}
					serverURL={this.props.serverURL}
					setProducts={this.props.setProducts}
				/>
			</div>
		);
	}
}

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.handleEscKey = this.handleEscKey.bind(this);
	}

	// Close Modal on ESC keyDown
	handleEscKey(e) {
		if (e.keyCode == 27) {
			this.props.closeModal();
		}
	}

	// Remove KeyDown callback from the global document object
	componentDidMount() {
		document.addEventListener('keydown',
			this.handleEscKey,
			false);
	}

	// Start KeyDown callback listening for ESC key press
	componentWillUnmount() {
		document.removeEventListener('keydown',
			this.handleEscKey,
			false);
	}

	render() {
		return (
			<div className="modal">
				<ModalContent 
					products={this.props.products}
			        cart={this.props.cart}
			        getTotalCost={this.props.getTotalCost}
			        addToCart={this.props.addToCart}
					removeFromCart={this.props.removeFromCart}
					closeModal={this.props.closeModal}
					setProducts={this.props.setProducts}
					serverURL={this.props.serverURL}
					getProductsChange={this.props.getProductsChange}
					getCartChange={this.props.getCartChange}
					getProductInfoChange={this.props.getProductInfoChange}
					getTotalCost={this.props.getTotalCost}
					isUpdated={this.props.isUpdated}
					resetIsUpdated={this.props.resetIsUpdated}
				/>
			</div>
		);
	}
}

export default Modal;