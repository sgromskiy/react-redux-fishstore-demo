import { ADD_FISH, DELETE_FISH, FETCH_FISH } from './actions';
const initialState = {
	loadingFishes: false,
	fishes: []
};

export const fishes = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FISH:
			return { ...state, fishes: [ ...state.fishes, action.fish ] };
		case FETCH_FISH:
			if (action.status === 'request') return { ...state, loadingFishes: true };
			if (action.status === 'success') return { ...state, fishes: [ ...action.fishes ], loadingFishes: false };
		default:
			return state;
	}
};
