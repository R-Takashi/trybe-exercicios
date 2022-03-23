// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const jokeObj = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, jokeObj)
    .then(resposta => resposta.json())
    .then(objeto => {
        console.log(objeto);
        const jokeContainer = document.getElementById('jokeContainer');
        jokeContainer.innerHTML = objeto.joke;
    });
};

window.onload = () => fetchJoke();