import { SHOW_PROFILE } from '../actions/types';

const initialState ={

    item: {},
   
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_PROFILE:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}