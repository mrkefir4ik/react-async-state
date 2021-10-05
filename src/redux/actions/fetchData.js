export const fetchData = (text) => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=18b43673946d2410bbb54325b0fcffd0&query=${text}`)
  .then(response => response.json())
  .then(json => dispatch({ type: 'FETCH_DATA', payload: json }))
  .catch((e)=>console.log(e))
    }
}