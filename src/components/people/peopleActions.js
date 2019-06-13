import * as types from '../constants';

export const getPeople = () => {
  return {
    type: types.GET_PEOPLE
  }
}

export const getPeopleSuccess = (payload) => {
  return {
    type: types.GET_PEOPLE_SUCCESS,
    payload
  }
}

export const getPeopleFailure = (error) => {
  return {
    type: types.GET_PEOPLE_FAILURE,
    error
  }
}

export const getPerson = () => {
  return {
    type: types.GET_PERSON
  }
}

export const getPersonSuccess = (payload) => {
  return {
    type: types.GET_PERSON_SUCCESS,
    payload
  }
}

export const getPersonFailure = (error) => {
  return {
    type: types.GET_PERSON_FAILURE,
    error
  }
}
// export const UPDATE_SRC = 'UPDATE_SRC'
//
// function fetchAllItems(searchStr) {
//   const endpoints = [
//     `https://swapi.co/api/people/?search=${searchStr}`,
//     `https://swapi.co/api/films/?search=${searchStr}`,
//     `https://swapi.co/api/starships/?search=${searchStr}`,
//     `https://swapi.co/api/species/?search=${searchStr}`,
//     `https://swapi.co/api/planets/?search=${searchStr}`,
//   ];
//
//   return (dispatch) => {
//     /*
//      * TODO Prepare responses as they come back
//      * As opposed to in one go when all promises have returned as is current
//      */
//     dispatch(updateSrcString(searchStr));
//     dispatch(requestItems(searchStr));
//     return Promise.all(endpoints.map(url =>
//       fetch(url).then(resp => resp.json())
//     ))
//     .then(array => prepareItems(array))
//     .then(json => dispatch(receiveItems(searchStr, json)));
//   };
// }
//
// function shouldFetchItems(state, searchStr) {
//   const posts = state.itemsBySearchString[searchStr];
//   if (!posts) {
//     return true;
//   } else if (posts.isFetching) {
//     return false;
//   }
//   return false;
// }
//
// export function fetchItemsIfNeeded(searchStr) {
//   return (dispatch, getState) => {
//     if (shouldFetchItems(getState(), searchStr)) {
//       return dispatch(fetchAllItems(searchStr));
//     }
//     return dispatch(updateSrcString(searchStr));
//   };
// }
