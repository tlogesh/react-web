import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from '../reducers/reducer'
import { applyMiddleware, createStore } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

export const history = createHistory()
const persistConfig = {
  key: 'root',
  storage,
}

const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, applyMiddleware(logger, thunk, routerMiddleware(history)));
export const persistor = persistStore(store);

export default [
    store,
    persistor,
    history
];