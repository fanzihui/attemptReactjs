import axios from 'axios'; //请求库

export function fetchDoubans(){
	return function(dispatch) {
		axios.get("http://localhost:8080/top250.json")
			.then((response) => {
				dispatch({
					type: "FETCH_DOUBANS"
				})
				dispatch({
					type: "FETCH_DOUBANS_FULFILLED",
					payload: response.data
				})
			})
			.catch((err) => {
				dispatch({
					type: "FETCH_DOUBANS_REJECTED",
					payload: err
				})
			})
	}
}
export function addDouban(id,title){
	return {
		type: 'ADD_DOUBAN',
		payload: {
			id,
			title,
		}
	}
}
export function deleteDouban(id){
	console.log('deleteDoubanActions'+id)
	return { type: 'DELETE_DOUBAN',payload: id }
}