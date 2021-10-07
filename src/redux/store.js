import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import { fetchDataWatcher } from '../saga/fetchSaga';

const sagaMiddleWare = createSagaMiddleware();
  
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(fetchDataWatcher);

  store.subscribe(() => {
    console.log(store.getState());
  })

  export default store;