const BREAK_POINT = 'https://swapi-trybe.herokuapp.com/api/planets';

const requestAPI = async () => {
  const response = await fetch(BREAK_POINT);
  const data = await response.json();
  return data;
};

export default requestAPI;
