import React, { Component } from 'react';

class EditFishForm extends Component {
	handleChange = (e) => {
		const fish = { ...this.props.fish, [e.currentTarget.name]: e.currentTarget.value };
		this.props.updateFish(this.props.index, fish);
	};

	render() {
		return (
			<div className="fish-edit">
				<input onChange={this.handleChange} value={this.props.fish.name} name="name" type="text" />
				<input
					onChange={this.handleChange}
					value={this.props.fish.price}
					name="price"
					type="number"
					step="10"
				/>
				<select onChange={this.handleChange} value={this.props.fish.status} name="status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out</option>
				</select>
				<textarea onChange={this.handleChange} value={this.props.fish.desc} name="desc" />
				<input onChange={this.handleChange} value={this.props.fish.image} name="image" type="text" />
				<button onClick={() => this.props.deleteFish(this.props.index)}>Delete Fish</button>
			</div>
		);
	}
}

export default EditFishForm;
