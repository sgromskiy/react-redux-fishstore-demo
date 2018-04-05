import React, { Component } from 'react';
import Header from "./Header";
import Fish from "./Fish";



class StoreFront extends Component {

    render () {
        return(
        <div className="menu">
            <Header tagline="Fresh seafood market" />
            <ul className="fishes">
                {Object.keys(this.props.fishes).map((key) => (
                    <Fish key={key} index={key} details={this.props.fishes[key]} addToOrder={this.props.addToOrder} />
                ))}
            </ul>
        </div>
        )
    }
}


export default StoreFront;