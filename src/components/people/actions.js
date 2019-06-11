import { GET_PEOPLE, GET_PERSON_SUCCESS, GET_PERSON_FAILURE, GET_PERSON, GET_PERSON_SUCCESS, GET_PERSON_FAILURE } from '../constants';

export getPeople = () => {
  return {
    type: GET_PEOPLE
  }
}

export getPeopleSuccess = (payload) => {
  return {
    type: GET_PEOPLE_SUCCESS,
    payload
  }
}

export getPeopleFailure = (error) => {
  return {
    type: GET_PEOPLE_FAILURE,
    error
  }
}

export getPerson = () => {
  return {
    type: GET_PERSON
  }
}

export getPersonSuccess = (payload) => {
  return {
    type: GET_PERSON_SUCCESS,
    payload
  }
}

export getPersonFailure = (error) => {
  return {
    type: GET_PERSON_FAILURE,
    error
  }
}
