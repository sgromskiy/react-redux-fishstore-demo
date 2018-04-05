import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from './components/App';

import './css/style.css';
import {fishes} from "./store/fishes/reducer";
import {addFish} from "./store/fishes/actions";



const store = createStore(fishes);


console.dir(store.getState())

const unsubscribe = store.subscribe(() =>
    console.dir(store.getState())
)

store.dispatch(addFish({
    desc: 'Lorem',
    name: 'Dollar',
    price: '1635',
    in_stoke: true,
    image: '/img/img.jpg'
}));

unsubscribe()

render(<Provider store={store}><App /></Provider>, document.querySelector('#main'));
