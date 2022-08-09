function memoize(f) {
  const cache = {};

  return (n) => {
      const key = n;
      if( key in cache){
          console.log("serve from cache")
          return cache[key];
      } 
      else{
           cache[key] = f(n);
           console.log("serve from function")
           return cache[key];
      }   
  } 
}

var factcache = {}
function fact(n) {
  console.log(`value come ${n}`)
  if(n<=1)
      return 1;
  if(n in factcache){
      console.log('use cache');
      return factcache[n];
  }

  factcache[n] = n* fact(n-1);
  return factcache[n];
}

console.log(fact(4));
console.log(fact(5));
