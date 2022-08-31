async function getNumber() {
  return 1;
}

//getNumber().then((value)=> console.log(value));

function getMovies() {
  fetch("https://swapi.dev/api/films")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(`error :: ` + error);
    });
}

getMovies();

/*
Get API call through async and wait
*/

async function getCurrency() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    //return response.json();
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(`error :: ${error}`);
  }
}

getCurrency();


function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, ...args) {
  await timeout(3000);
  return fn(...args);
}


