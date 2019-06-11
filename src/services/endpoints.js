const baseUrl = 'https://swapi.co/api';

export default {
  // People endpoints
  "getPeople": {
    "url": `${baseUrl}/people`,
    "method": "GET",
  },
  "getPerson": (id) => {
    "url": `${baseUrl}/people/${id}`,
    "method": "GET",
  },
  // Planet endpoints
  "getPlanets": {
    "url": `${baseUrl}/planets`,
    "method": "GET",
  },
  "getPlanet": (id) => {
    "url": `${baseUrl}/planets/${id}`,
    "method": "GET",
  },
  // Starships endpoints
  "getStarships": {
    "url": `${baseUrl}/starships`,
    "method": "GET",
  },
  "getStarship": (id) => {
    "url": `${baseUrl}/starships/${id}`,
    "method": "GET",
  },
}
