import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }


	goToStore = (e) => {
		e.preventDefault();
		const storeName = this.myInput.current.value;
		this.props.history.push(`/store/${storeName}`);
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" required defaultValue={getFunName()} ref={this.myInput} />
				<button type="submit">Visit store</button>
			</form>
		);
	}
}

export default StorePicker;
