const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = './img/logo.png'

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

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
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // Create p element then set textContent to movie's description
      const p = document.createElement('p');
      // Limit description length to 300 chars to prevent text overflow 
      movie.description= movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      // Append cards to the container element
      container.appendChild(card);

      // Append h1 and p to card
      card.appendChild(h1);
      card.appendChild(p);
    });
  }
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = "Gah, it's not working!";
    app.appendChild(errorMessage);
  }
}

// Send request
request.send();