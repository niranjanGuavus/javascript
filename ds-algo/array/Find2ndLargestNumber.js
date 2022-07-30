/**
 * Ques: Find the 2nd highest item from an array
 * Ans: it just find the 2nd highest not kth highest
 * */

 function secondHighestNumber(arr) {
    let first = -1, second = -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > first) {
            second = first;
            first = arr[i];
        } else if(arr[i]> second && arr[i] != first){
            second = arr[i];
        }
    }
}

/**
 * Ques: Find the kth highest item from an array
 * Ans: 
 */