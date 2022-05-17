// const networkRequest = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout( ()=> {
//             resolve('Async Code');
//         }, 2000);

//     })
// }

// const doNetworkRequest = async () => {
//     const resp = await networkRequest();
//     //console.log(resp);  
//     return resp;
// } 

// console.log('Hello World');
// doNetworkRequest().then(data => console.log(data));
// console.log('The End');


// let customer = { name: 'Leo', email: 'leo@gmail.com' };
// function greeting(text, text2) {
//    console.log(`${text} ${this.name}, ${text2}`);
// }

// const hello = greeting.bind(customer)
// hello('hello','welcome')


let testPromise = new Promise((resolve, reject) => {
  console.log("initialize promise");
  resolve("execute promise");

});

testPromise.then(message => console.log(message));