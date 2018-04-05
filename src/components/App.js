import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import StoreFront from './StoreFront';
import fishes from './../sample-fishes';

class App extends Component {
	state = {
		fishes: {},
		order: {}
	};

	addFish = (fish) => {
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({ fishes });
	};

	updateFish = (key, fish) => {
		const fishes = { ...this.state.fishes };
		fishes[key] = fish;
		this.setState({ fishes });
	};

	deleteFish = (key) => {
		const fishes = { ...this.state.fishes };
		fishes[key] = null;
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = (key) => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	};

	removeFromOrder = (key) => {
		const order = { ...this.state.order };
		delete order[key];
		this.setState({ order });
	};

	componentDidMount() {
		const localStorageRef = localStorage.getItem('order');
		if (localStorageRef) this.setState({ order: JSON.parse(localStorageRef) });
	}

	componentDidUpdate() {
		localStorage.setItem('order', JSON.stringify(this.state.order));
	}

    componentWillUnmount() {
		//base.removeBinding(this.ref);
	}

	render() {
		return (
			<div className="catch-of-the-day">
                <StoreFront fishes={this.state.fishes} addToOrder={this.addToOrder} />

				<Order removeFromOrder={this.removeFromOrder} fishes={this.state.fishes} order={this.state.order} />

				<Inventory
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					fishes={this.state.fishes}
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		);
	}
}

export default App;
