import request from '../../services/request';
import endpoints from '../../services/endpoints';

export const getStarships = () => {
  let options = {
    ...endpoints.getStarships()
  };
  return request.make(options)
}

export const getStarship = (id) => {
  let options = {
    ...endpoints.getStarship(id)
  };
  return request.make(options)
}
