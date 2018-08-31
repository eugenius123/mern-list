import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';


const initialState = {
	items: [
		{ id: uuid(), name: 'Ann'},
		{ id: uuid(), name: 'Barbara'},			
		{ id: uuid(), name: 'Rachel'},
		{ id: uuid(), name: 'Agua'},
	]
};

export default function(state = initialState,action){
	switch(action.type) {
		case GET_ITEMS:
			return {
				...state
			}
		default:
			return state;
	}
}