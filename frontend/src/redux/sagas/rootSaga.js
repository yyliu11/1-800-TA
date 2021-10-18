import { takeLatest } from 'redux-saga/effects';
import { handleGetPosts} from './handlers/posts';
import { GET_POSTS } from '../ducks/posts';

export function* watcherSaga() {
  yield takeLatest(GET_POSTS, handleGetPosts);
}