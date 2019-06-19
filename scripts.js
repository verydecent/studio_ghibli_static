// Creates a request variable and assigns a new XMLHttpRequest object instance to it
const request = new XMLHttpRequest();

// Open a connection and choose GET method to the API URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // Initiate access to JSON
  // >:D
  const data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {

      // Create div element then set class to card
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      
      // Create h1 element then set textContent to movie's title 
      const title = document.createElement('h1');
      title.textContent = movie.title;

      // Create p element then set textContent to movie's description
      const description = document.createElement('p');
      // Limit description length to 300 chars to prevent text overflow 
      movie.description= movie.description.subString,(0, 300);
      package.textContent = `${movie.description}...`;

    });
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

app.appendChild(logo);
app.appendChild(container);