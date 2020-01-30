import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = () => {
//   return async (dispatch, getState) => { 
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({
//       type: 'FETCH_POST',
//       payload: response
//     })
//   };
// };
// The following can be simplified to below:

export const fetchPosts = () => async dispatch => { 
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    })
};

export const fetchUser = userId => async dispatch => { 
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

// dispatch returns the function _fetchUser
// userId is fed to _fetchUser
// downside of this is there is no way re-fetch
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// })

// Another way of overfetching that allows re-fetch
// this one is essentially a combo function
// get list of posts
// get unique users from list
// fetch user using unique users
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id))); // no await as we don't need to wait

  // optional optimising using _.chain
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // for lodash this means execute(), chain won't exec w/o this;
}