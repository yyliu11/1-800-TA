import axios from 'axios';

export function requestGetPosts() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:3000/posts'
  });
}