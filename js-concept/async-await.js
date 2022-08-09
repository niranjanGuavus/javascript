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

async function getCuerency() {
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

getCuerency();

// async function getCuerency() {

//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users'/*,
//          {mode: 'no-cors',
//           'Content-Type': "application/json",
//           }*/);
//         console.log(response);
//         let result = await response.json();
//         console.log(result);
//     }catch(error){
//         console.log(`error :: ${error}`);
//     }

// }

// getCuerency();
