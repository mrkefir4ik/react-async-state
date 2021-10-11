
function rootReducer(state = {}, action) {
    if (action.type === 'FETCH_DATA') {
      return {results: action.payload, ...state}
    }

    if (action.type === 'ASYNC_FETCH_DATA') {
      return {...state, query: action.payload}
    }

    
      return state;
    }

    export default rootReducer;