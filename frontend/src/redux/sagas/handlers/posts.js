import { call, put } from 'redux-saga/effects';
import { requestGetPosts } from '../requests/posts';
import { setPosts } from '../../ducks/posts';

export function* handleGetPosts(action) {
  try {
    const response = yield call(requestGetPosts);
    const { data } = response;
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}