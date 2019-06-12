import * as actions from './planetActions';
import * as request from './planetRequest';

export const getPlanets = () => {
  return dispatch => {
    dispatch(actions.getPlanets());
    request.getPlanets().then((response) => {
      console.log("success", response);
      dispatch(actions.getPlanetsSuccess(response));
    }).catch((error) => {
      console.log("error", error);
      dispatch(actions.getPlanetsFailure(error))
    })
  }
}

export const getPlanet = (id) => {
  return dispatch => {
    dispatch(actions.getPlanet());
    request.getPlanet().then((response) => {
      dispatch(actions.getPlanetSuccess(response));
    }).catch((error) => {
      dispatch(actions.getPlanetFailure(error))
    })
  }
}
