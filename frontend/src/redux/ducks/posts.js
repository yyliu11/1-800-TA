export const GET_POSTS = 'GET_POSTS';
const SET_POSTS = 'SET_POSTS';
const EDIT_POST = 'EDIT_POST';

export const getPosts = () => ({
  type: GET_POSTS
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts
});

export const editPost = (editedPost) => ({
  type: EDIT_POST,
  editedPost
});

const initialState = {
  posts: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      const { posts } = action;
      return { ...state, posts};
    case EDIT_POST:
      const { editedPost } = action;
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post.id === editedPost.id) {
            post.title = editedPost.title;
            post.body = editedPost.body;
          }
          return post;
        })
      }
    default:
      return state;
  }
};
