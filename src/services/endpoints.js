const baseUrl = 'https://swapi.co/api';

export default {
  // People endpoints
  "getPeople": () => {
      return {
        "url": `${baseUrl}/people`,
        "method": "GET",
      }
  },
  "getPerson": (id) => {
    return {
      "url": `${baseUrl}/people/${id}`,
      "method": "GET",
    }
  },
  // Planet endpoints
  "getPlanets": () => {
    return {
      "url": `${baseUrl}/planets`,
      "method": "GET",
    }
  },
  "getPlanet": (id) => {
    return {
      "url": `${baseUrl}/planets/${id}`,
      "method": "GET",
    }
  },
  // Starships endpoints
  "getStarships": () => {
    return {
      "url": `${baseUrl}/starships`,
      "method": "GET",
    }
  },
  "getStarship": (id) => {
    return {
      "url": `${baseUrl}/starships/${id}`,
      "method": "GET",
    }
  },
}
