const smallest_subarray_with_given_sum = function(s, arr) {
  // TODO: Write your code here
  let minSubArryLen = 0;
  for(let i=0; i< arr.length; i++){
    let subArrySum = arr[i];
    let j = ++i;

    while(subArrySum < s && j<arr.length) {
      subArrySum += arr[j];
      ++j
    }

    if(subArrySum >= s) {
      let subArrayLen = (j-i)+1;
      if(minSubArryLen==0)
        minSubArryLen = subArrayLen;
      if(subArrayLen < minSubArryLen);
        minSubArryLen = subArrayLen;
    }
  }
  return minSubArryLen;
};

smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2] )