// Creates a request variable and assigns a new XMLHttpRequest object instance to it
const request = new XMLHttpRequest();

// Open a connection and choose GET method to the API URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // Initiate access to JSON
  // >:D
  const data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => console.log(movie.title));
  }
  else console.log('error');
}

// Send request
request.send();

// DOM section

const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = './img/logo.png'


const container = document.createElement('div');
container.setAttribute('class', 'container');
