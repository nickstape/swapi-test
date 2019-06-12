import request from '../../services/request';
import endpoints from '../../services/endpoints';

export const getPlanets = () => {
  let options = {
    ...endpoints.getPlanets()
  };
  return request.make(options)
}

export const getPlanet = (id) => {
  let options = {
    ...endpoints.getPlanet(id)
  };
  return request.make(options)
}
