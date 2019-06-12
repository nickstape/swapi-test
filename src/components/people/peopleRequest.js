import request from '../../services/request';
import endpoints from '../../services/endpoints';

export const getPeople = () => {
  let options = {
    ...endpoints.getPeople()
  };
  return request.make(options)
}

export const getPerson = (id) => {
  let options = {
    ...endpoints.getPerson(id)
  };
  return request.make(options)
}
