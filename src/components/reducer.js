import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILURE } from './constants';

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
    case GET_PEOPLE_SUCCESS:
        return (
          Object.assign({}, state, {
            loading: false,
            people: action.payload
          })
        )
    case GET_PEOPLE_FAILURE:
          return (
            Object.assign({}, state, {
              loading: false,
              error: action.error
            })
          )
    default:
      return state
  }
}
