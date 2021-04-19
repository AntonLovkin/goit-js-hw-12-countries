const BASE_URL = 'https://restcountries.eu/rest/v2'

export default (searchQuery) => {
    // console.log(searchQuery);
    return fetch(`${BASE_URL}/name/${searchQuery}`)
      .then(response => {
          if (!response.ok) {
              throw error;
          }
          return response.json();
    })   
};

