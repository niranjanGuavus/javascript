function countSubstr(str, subStr) {
  let count = 0;
  for (const [index,ch] of [...str].entries()){
      let substrPresent = true;
      for(let j=0; j<subStr.length; j++){
          if(str[index+j] !== subStr[j] ){
              substrPresent = false;
              break;
          }
      }
      if(substrPresent) ++count;

  }
  return count;
}


//console.log(countSubstr('helloWorldhello', 'hello'));
