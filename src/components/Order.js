import React, { Component } from 'react';
import { formatPrice } from './../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends Component {
	renderOrder = (key) => {
		const fish = this.props.fishes[key];
		if (!fish) return null;
		const count = this.props.order[key];
		const isAvailable = fish && fish.status === 'available';

		return (
			<CSSTransition classNames="order" key={key} timeout={{ enter: 250, exit: 250 }}>
				<li key={key} className={!isAvailable ? 'unavailable' : ''}>
					<span>
						<TransitionGroup component="span" className="count">
							<CSSTransition classNames="count" key={count} timeout={{ enter: 250, exit: 250 }}>
								<span>{count}</span>
							</CSSTransition>
						</TransitionGroup>
						lbs <span className="order-title"> {fish.name}</span>
						<span className="price"> {formatPrice(count * fish.price)}</span>
						<button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
					</span>
				</li>
			</CSSTransition>
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

				<TransitionGroup component="ul" className="order">
					{orderIds.map(this.renderOrder)}
				</TransitionGroup>
				<div className="total">
					Total: <span className="price">{formatPrice(total)}</span>
				</div>
			</div>
		);
	}
}

export default Order;
