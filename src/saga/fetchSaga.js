import {put, takeEvery, call} from 'redux-saga/effects'
import store from '../redux/store'


const fetchDataFromApi = (text) => fetch(`https://api.themoviedb.org/3/search/movie?api_key=18b43673946d2410bbb54325b0fcffd0&query=${text}`)
function* fetchDataWorker() {
    const text = store.getState().query;
    const data = yield call(()=>fetchDataFromApi(text))
    const json = yield call(() => new Promise(res => res(data.json())))

    yield put({ type: 'FETCH_DATA', payload: json })

}

 export function* fetchDataWatcher() {
    yield takeEvery('ASYNC_FETCH_DATA', fetchDataWorker)
}