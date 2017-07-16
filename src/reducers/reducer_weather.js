import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
        return [action.payload.data, ...state];
        //return state.concat([action.payload.data]);
    }


    console.log('Action Received', action);
    return state;
}