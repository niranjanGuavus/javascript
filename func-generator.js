

function* iterator() {
  let count =0;
  for(let i=0; i<3; i++) {
      console.log('i value is :: '+i)
      count++;
      yield i;
  }
  //return count;
}

let it = iterator();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
