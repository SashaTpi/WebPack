import './style.css';

const app = document.getElementById('app');

app.innerHTML = '<h2>Hello from Webpack!</h2>';

fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });