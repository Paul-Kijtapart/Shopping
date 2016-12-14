import React from 'react';
import ProductList from './productList.component.js';

class ModalFooter extends React.Component {
	render() {
		return (
			<div className="modalFooter">
				<p> Footer </p>
				<button id="checkout"> Checkout </button>
			</div>
		);
	}
}

class ModalHeader extends React.Component {
	render() {
		const cart = this.props.cart;
		const products = this.props.products;
		const totalCost = this.props.getTotalCost(cart, products);
		return (
			<div className="modalHeader">
				<p id="title"> Cart Info </p>
				<p id="cost"> Total Cost : {totalCost} </p>
				<button className="closeModal"> X </button>
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

		console.log('orderItems are : ');
		console.log(orderItems);

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
				/>
				<ModalBody 
					products={this.props.products}
			        cart={this.props.cart}
			        onCartAdded={this.props.onCartAdded}
					onCartRemoved={this.props.onCartRemoved}
					isEmpty={this.props.isEmpty}
				/>
				<ModalFooter />
			</div>
		);
	}
}

class Modal extends React.Component {
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
				/>
			</div>
		);
	}
}

export default Modal;