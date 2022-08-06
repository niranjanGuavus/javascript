/**
 * Promise create a  javascript object which gives a value in feature either sucess or reject.
 * user can do chain of promise by nested then
 */
const networkRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async Code");
    }, 2000);
  });
};

const doNetworkRequest = async () => {
  const resp = await networkRequest();
  //console.log(resp);
  return resp;
};

doNetworkRequest().then((data) => console.log(data));

/**
 * sample example of promise
 */
let testPromise = new Promise((resolve, reject) => {
  console.log("initialize promise");
  resolve("execute promise");
});

testPromise.then((message) => console.log(message));
