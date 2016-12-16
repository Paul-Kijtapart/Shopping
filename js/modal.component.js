import React from 'react';
import ProductList from './productList.component.js';

// Util function
import {
	loadProducts
} from './ajaxHelper.js';

class ModalFooter extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheckout = this.handleCheckout.bind(this);
	}

	handleCheckout() {
		// Do something then close modal

		/* 
		When a user click CheckOut
		1: When the user clicks on checkout, you will need to make sure that the products are still available in the back store and the prices are updated.
		2: when the user clicks on checkout, you will alert the user with the message showing that you are confirming the final total price as well as the availability.
			- If there is any price change, you will need to alert the user for each product for which the price changed.
			- For any of the selected products, if the quantity that the user ordered is not available any more, you will change the number of products in the cart to the now available quantity.
				- You will also need to alert the user about the updated quantity as well.
		3. The cart variable should also be updated to reflect the revised prices/quantity. 
		4. you will alert the user with the total amount due (based on the cart's contents).
		*/

		loadProducts(this.props.serverURL, 5, this.props.setProducts);
		console.log('lets go modal footer. \n ');
		let status = confirm('done with purchase?');
		if (status) {
			this.props.closeModal()
		};
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

	componentWillUpdate(nextProps, nextState) {
		console.log('what is nextState: \n');
		console.log(nextState);
		console.log('oldProps: \n');
		console.log(this.props);
		console.log('nextProps:  \n');
		console.log(nextProps);

		// Calculate the difference before old products and next products
		// See how it affects the cart
		const prevProducts = this.props.products;
		const cart = this.props.cart;
		this.cartDiff = this.props.getCartChange(cart, prevProducts, nextProps.products);
		this.productDiff = this.props.getProductsChange(prevProducts, nextProps.products);
	}

	render() {
		const products = this.props.products;
		const cart = this.props.cart;
		let orderItems = {};

		for (let productName in cart) {
			orderItems[productName] = products[productName];
		}

		// TODO: display cart change as well as products change

		return (
			<div className="modalBody">
				<ProductList 
					products={orderItems}
			        cart={cart}
			        addToCart={this.props.addToCart}
			        removeFromCart={this.props.removeFromCart}
			        isEmpty={this.props.isEmpty}
				/>
				 <p> {this.cartDiff? 'Cart has changed' + this.cartDiff : null} </p>
				 <p> {this.productDiff? 'Updated products' + this.productDiff  : null}  </p>
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
					isEmpty={this.props.isEmpty}
					closeModal={this.props.closeModal}
					getProductsChange={this.props.getProductsChange}
					getCartChange={this.props.getCartChange}
					getProductInfoChange={this.props.getProductInfoChange}
					getTotalCost={this.props.getTotalCost}
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

	handleEscKey(e) {
		console.log(e);
		if (e.keyCode == 27) {
			this.props.closeModal();
		}
	}

	componentDidMount() {
		// console.log('modal finished rendering');
		// Set-up esc listener onKeyDown=ESC
		// Bind to document
		// this.escapeFunc = this.handleEscKey.call(this);
		document.addEventListener('keydown',
			this.handleEscKey,
			false);
	}

	componentWillUnmount() {
		// console.log('Modal unmounting');
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
					isEmpty={this.props.isEmpty}
					closeModal={this.props.closeModal}
					setProducts={this.props.setProducts}
					serverURL={this.props.serverURL}
					getProductsChange={this.props.getProductsChange}
					getCartChange={this.props.getCartChange}
					getProductInfoChange={this.props.getProductInfoChange}
					getTotalCost={this.props.getTotalCost}
				/>
			</div>
		);
	}
}

export default Modal;