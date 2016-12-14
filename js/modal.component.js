import React from 'react';
import ProductList from './productList.component.js';

class ModalFooter extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheckout = this.handleCheckout.bind(this);
	}

	handleCheckout() {
		// Do something then close modal
		this.props.closeModal();
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
	render() {
		const products = this.props.products;
		const cart = this.props.cart;
		let orderItems = {};

		for (let productName in cart) {
			orderItems[productName] = products[productName];
		}

		// console.log('orderItems are : ');
		// console.log(orderItems);

		return (
			<div className="modalBody">
				<ProductList 
					products={orderItems}
			        cart={cart}
			        onCartAdded={this.props.onCartAdded}
			        onCartRemoved={this.props.onCartRemoved}
			        isEmpty={this.props.isEmpty}
				/>
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
			        onCartAdded={this.props.onCartAdded}
					onCartRemoved={this.props.onCartRemoved}
					isEmpty={this.props.isEmpty}
					closeModal={this.props.closeModal}
				/>
				<ModalFooter 
					closeModal={this.props.closeModal}
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
			        onCartAdded={this.props.onCartAdded}
					onCartRemoved={this.props.onCartRemoved}
					isEmpty={this.props.isEmpty}
					closeModal={this.props.closeModal}
				/>
			</div>
		);
	}
}

export default Modal;