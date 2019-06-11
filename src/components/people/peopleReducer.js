import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILURE } from '../constants';

const initialState = {
  people: [],
  person: {},
  error: '',
  loading: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return (
        Object.assign({}, state, {
          loading: true
        })
      )
    default:
      return state
  }
}
