import { ADD_FISH, DELETE_FISH } from './actions';
const initialState = []

export const fishes = (state = initialState, action) => {
    switch(action.type){
        case  ADD_FISH:
            return [...state, action.fish];
        default:
            return state;
    }
}