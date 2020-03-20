import jsonPlaceHolder from '../apiClients/jsonPlaceHolder'

export const fetchPosts = () => {
  return async (dispatch, _getState) => {
    const response = await jsonPlaceHolder.get('/posts')

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}
// NOTE: ES6 refactor. Leaving here for reference.
//export const fetchPosts = () => async (dispatch, _getState) => {
//   const response = await jsonPlaceHolder.get('/posts')
//
//   dispatch({type: 'FETCH_POSTS', payload: response})
// }

export const fetchUser = userId => {
  return async (dispatch, _getState) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`)

    dispatch({type: 'FETCH_USER', payload: response.data})
  }
}