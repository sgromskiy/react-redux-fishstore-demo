import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
	render() {
		return (
			<div className="inventoryy">
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map((key) => (
					<EditFishForm
						updateFish={this.props.updateFish}
						deleteFish={this.props.deleteFish}
						index={key}
						key={key}
						fish={this.props.fishes[key]}
					/>
				))}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>Load samples</button>
			</div>
		);
	}
}

export default Inventory;
