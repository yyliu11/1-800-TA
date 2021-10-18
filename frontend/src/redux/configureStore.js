import { combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsReducer from './ducks/posts';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  posts: postsReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;