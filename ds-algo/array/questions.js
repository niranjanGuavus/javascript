//Ques: Find missing numbers in a sqequenceally array:- 
//Ans:- check the diff between two consecutive number in loop.

//Ques: Find a missing single number in a sqequenceally array(0,…,n):- 
//Ans:- find the sum of the range like n(n+1)/2 then - sum(array)

//Ques: How do you find the largest and smallest number in an unsorted integer array?
// Ans:just traverse the array and store one item in min and max and compare with others and chose max or min. Or use math function
    let v = [1, 10, 20, 0, 59, 63, 0, 88, 0];
    let min = Number.MAX_VALUE ;
    let max = Number.MIN_VALUE;
    for (let item of v) {
        min = Math.min(min, item);
        max = Math.max(max, item); 
    }
    console.log( min, max);// 0, 88
    //OR
    console.log(Math.min(...v), Math.max(...v));// 0, 88

//Ques: How do you find all k no of sequence pairs of an array of integer whose sum is equal to a given target number
//Ans:- sliding window and sliding window will check he sum and number items in sum then subtract first item from the array and increase start pointer. 
// Once sum and target match then collect all the items between start and end pointer and push the result.
/**
 * 
 * @param {*} arr given array
 * @param {*} k number of item in group
 * @param {*} target sum match to the target
 * @return array of pairs
 */
 function findPairs(arr, k, target){
    let startIndex = 0;
    let pairSum = 0;
    let parisArr = [];

    for(let i=0; i<arr.length; i++){
        
        pairSum+=arr[i];

        if(pairSum < target && (i-startIndex) < k-1) {
            continue;
        } 
        
        if(pairSum === target){
            let values = [];
            let startCounter = startIndex;
            while(startCounter <=i){
                values.push(arr[startCounter]);
                ++startCounter
            }
            parisArr.push(values)
        }
        pairSum -= arr[startIndex];
        startIndex++
    }
    return parisArr;
}

let v1 = [10, 10, 20, 0, 10, 10, 5, 15];
let v2 = [5,5,3,2,5,10, 10, 20, 0, 10, 10, 5, 15];

console.log( findPairs(v,2, 20 ));
console.log( findPairs(v1,4, 20 ));

/**
 * Ques: how to eliminate duplicate values from array of number or string
 * Ans:- there are couple of ways can do it
 * 1. through filter function of array it will work for string and numeric ot through set
 * 2. for manually we need to sort the array either asc or desc for both string and numeric case then compare the sequence values
*/
//Through Filter
function getUniqueValues(arr) {
    let uniqueValues = arr.filter((item, index) => arr.indexOf(item) === index);
    return uniqueValues;
}

let u1 = [10, 10, 20, 0, 10, 10, 5, 15];
let u2 = [5,5,3,2,5,10, 10, 20, 0, 10, 10, 5, 15];
let u3 = ['A','B', 'c', 'A','B', 'c', 'a','b', 'C']

console.log( getUniqueValues(u1));
console.log( getUniqueValues(u2));
console.log( getUniqueValues(u3));

// Through Set
function getUniqueValues1(arr) {
    let uniqueValues = [...new Set(arr)];
    return uniqueValues;
}

// Through no inbuilt function, here we can use object instead of map also.
function getUniqueValues2(arr) {
    let uniqueMap = new Map();
    for (let item of arr) {
        if(!uniqueMap.has(item)){
            uniqueMap.set(item, 1);
        }  
    }
    return [...uniqueMap.keys()];
}


/**
 * Ques: Given an unsorted array of integers, find the length of the longest consecutive elements sequence?
 * Ans:- two pointer way   
 */
 function getLongestSequence(arr) {
    let startIndex = 0;
    let resultSequence = [];
    let len = arr.length;
    for(let i=1; i<=len; i++) {
        if((arr[i]- arr[i-1])===1 && i<len ) 
            continue;
        else {
            // sequence numbers are from startIndex to i.
            let sequence = []
            if(startIndex<i-1){
                while(startIndex <i){
                    sequence.push(arr[startIndex])
                    ++startIndex
                }
               resultSequence.push(sequence); 
            } else{
                startIndex = i;
            }  
        }  
    }
    return resultSequence;
}

let s = [1,2,4,5,6,10,11,12];
console.log(getLongestSequence(s));

/**
 * Ques: How do you search a target value in a rotated array? 
 * Ans:- The rotated array means if we connect he head with tail the array is sorted.
 * here first we need to split the array into two parts where they are two sorted parts.(apply binary search to find the two parts.)
 * then we applied the binary search over a part of the array to find the the element. 
*/

/**
 * Ques: Remove the duplicate values from a sorted numeric array
 * Ans: scan the array in loop and compare with the current with the next and replace it
 */

 function getUniqueNumericOnSortedArr(arr) {
    
    let startIndex =0;
    for(let i=0; i<arr.length-1; i++) {
        let j = i+1
        if(arr[i] === arr[j]){
            continue;
        }

        arr[++startIndex] = arr[j];
    }
    return arr.slice(0, startIndex+1);
}

let nv = [1,2,2,3,3,3,11,12];

console.log(getUniqueNumericOnSortedArr(nv));


