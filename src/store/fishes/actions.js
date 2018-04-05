import fetch from 'cross-fetch';

export const ADD_FISH = 'ADD_FISH';
export const DELETE_FISH = 'ADD_FISH';

export const FETCH_FISH = 'FETCH_FISH';

export const addFish = (fish) => {
	return {
		type: ADD_FISH,
		fish
	};
};

export const deleteFish = (fishID) => {
	return {
		type: DELETE_FISH,
		fishID
	};
};

export const fetchFishRequest = () => {
	return {
		type: FETCH_FISH,
		status: 'request'
	};
};

export const fetchFishSuccess = (fishes) => {
	return {
		type: FETCH_FISH,
		fishes,
		status: 'success'
	};
};

export const fetchFishError = (error) => {
	return {
		type: FETCH_FISH,
		error,
		status: 'error'
	};
};

export const fetchFish = () => {
	return function(dispatch) {
		// start request
		dispatch(fetchFishRequest());

		//async
		return fetch('https://fishstore-beeb.restdb.io/fishes', {
			headers: {
				'x-apikey': '5ac5e120f0a7555103ceaa15'
			}
		})
			.then((response) => response.json(), (error) => console.log('An error occurred.', error))
			.then((json) =>
				// recive data
				dispatch(fetchFishSuccess(json))
			);
	};
};
