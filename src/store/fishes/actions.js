export const ADD_FISH = 'ADD_FISH';
export const DELETE_FISH = 'ADD_FISH';

export const FETCH_FISH = 'FETCH_FISH';



export const addFish = (fish) => {
    return{
        type: ADD_FISH,
        fish
    }
}

export const deleteFish = (fishID) => {
    return {
        type: DELETE_FISH,
        fishID
    }
}


export const fetchFish = () => {
    return {
        type: DELETE_FISH,
        status: 'loading'
    }   
}

export const fetchFishSuccess = (fishes) => {
    return {
        type: DELETE_FISH,
        fishes
    }
}