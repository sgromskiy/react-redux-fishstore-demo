import React, { Component } from 'react';
import { formatPrice } from './../helpers';

class Order extends Component {
	renderOrder = (key) => {
		const fish = this.props.fishes[key];
		if (!fish) return null;
		const count = this.props.order[key];
		const isAvailable = fish && fish.status === 'available';

		return (
			<li key={key} className={!isAvailable ? 'unavailable' : ''}>
				{count} lbs <span className="order-title"> {fish.name}</span>
				<span className="price"> {formatPrice(count * fish.price)}</span>
				<button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
			</li>
		);
	};

	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailable = fish && fish.status === 'available';
			if (isAvailable) {
				return prevTotal + count * fish.price;
			}
			return prevTotal;
		}, 0);
		return (
			<div className="order-wrap">
				<h2>Order</h2>

				<ul className="order">
					{orderIds.map(this.renderOrder)}
					<li className="total">
						Total: <span className="price">{formatPrice(total)}</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default Order;
