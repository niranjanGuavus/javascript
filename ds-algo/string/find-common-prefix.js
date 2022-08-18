/**
 * first sort the string array so that all string in the array will be character wise sequence.
 * then compare the first with last to find the max common prefix.
 * Here the Time complexity is O(nlogn)=> because of sorting.
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */

 class Solution {
    longestCommonPrefix(arr,n){ 
        //code here
        let sortArr = arr.sort();
        let firstItem = sortArr[0];
        let lastItem = sortArr[n-1]
        let minLen = Math.min(firstItem.length, lastItem.length)
        let count =0;
        while(count<minLen){
            if(firstItem[count] === lastItem[count]){
                ++count;
                continue;
            } 
            break
        }
        return count===0 ? -1 : firstItem.slice(0, count);
    }
}