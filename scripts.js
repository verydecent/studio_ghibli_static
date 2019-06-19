// Creates a request variable and assigns a new XMLHttpRequest object instance to it
const request = new XMLHttpRequest();

// Open a connection and choose GET method to the API URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  
}

// Send request
request.send();