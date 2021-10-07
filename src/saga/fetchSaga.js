import {put, takeEvery, call} from 'redux-saga/effects'


const fetchDataFromApi = () => fetch(`https://api.themoviedb.org/3/search/movie?api_key=18b43673946d2410bbb54325b0fcffd0&query=lord`)
function* fetchDataWorker() {
    
    const data = yield call(fetchDataFromApi)
    const json = yield call(() => new Promise(res => res(data.json)))

    yield put({ type: 'FETCH_DATA', payload: json })

}

 export function* fetchDataWatcher() {
    yield takeEvery({ type: 'ASYNC_FETCH_DATA' }, fetchDataWorker)
}