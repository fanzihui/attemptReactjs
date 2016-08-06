export default function reducer(state={
		doubans: [],
		subjects: [],
		fetching: false,
		fetched: false,
		error: null,
	},action){

	switch (action.type){
		case "FETCH_DOUBANS": {
			return {...state,fetching: true}
		}
		case "FETCH_DOUBANS_REJECTED": {
			return {
				...state,
				fetching: false,
				error: action.payload,
			}
		}
		case "FETCH_DOUBANS_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				doubans: action.payload,
				subjects: action.payload.subjects,
			}
		}
		case "DELETE_DOUBAN": {
	        return {
	          ...state,
	          subjects: state.subjects.filter(subject => subject.id !== action.payload),
	        }
      	}
      	case "ADD_DOUBAN": {
      		return {
      			...state,
      			subjects: [...state.subjects,action.payload]
      		}
      	}
	}
	// console.log(state);
	return state
}