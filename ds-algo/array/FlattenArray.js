//Question 1: Flatten the array
function flatten(arr, result) {
  if(!result) result = [];

  if(!Array.isArray(arr)){
    result.push(arr);
    return;
  } 

  for( const item of arr ) {
    flatten(item, result);
  }
  return result;
}

let rr = flatten([1,2,[3,4,[10,20]]])
console.log(rr);// [1,2,3,4,10,20]
//Alternate arr.flat(2)