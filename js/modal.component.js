import React from 'react';

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
		return (
			<div className="modalBody">
				Content
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
			        getTotalCost={this.props.getTotalCost}
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
				/>
			</div>
		);
	}
}

export default Modal;