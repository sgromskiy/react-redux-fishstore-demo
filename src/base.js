import Rebase from 're-base';
import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyD8P2rd2lb-SDy2mKCyHUtNg2p81UXa_S8',
	authDomain: 'reactlearning-590eb.firebaseapp.com',
	databaseURL: 'https://reactlearning-590eb.firebaseio.com'
});

const base = Rebase.createClass(fireBaseApp.database());

export { fireBaseApp };
export default base;
