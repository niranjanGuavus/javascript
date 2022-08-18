/**
 * @param {string} str
 * @returns {number}
 */

 class Solution {
    romanToDecimal(str){ 
      //code here
      let romanNumericMap = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]])
      let numericValue = 0;
      for (let i=0; i<str.length; i++) {
          let value = romanNumericMap.get(str[i].toUpperCase());
          numericValue+= value;
          
          if(i!==0) {
            let prevValue = romanNumericMap.get(str[i-1].toUpperCase());
              if(prevValue<value) {
                 numericValue -= 2*prevValue;
              }
          }
      }
     return numericValue
    }

    //Reverse 

     decimalToRoman(num) {
        //better tu use map here instead of object
        var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
          while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
      }
}

// Roman numbers are 
/**
 * I	i	1
II	ii	2
III	iii	3
IV	iv	4
V	v	5
VI	vi	6
VII	vii	7
VIII	viii	8
IX	ix	9
X	x	10
XI	xi	11
XII	xii	12
XIII	xiii	13
XIV	xiv	14
XV	xv	15
XVI	xvi	16
XVII	xvii	17
XVIII	xviii	18
XIX	xix	19
XX	xx	20
XXI	xxi	21
XXII	xxii	22
XXIII	xxiii	23
XXX	xxx	30
XL	xl	40
 */