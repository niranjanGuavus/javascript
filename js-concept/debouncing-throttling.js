/**
 * Debouncing:- It is technique to execute a function exactly once after a certain time.
 */

 function debounce(fun, delay) {
    let timerId;
    return (...args)=> {
        clearTimeout(timerId);
        timerId = setTimeout(()=> {
            fun(args);
        }, delay);
    }
}

let tempFun = (...args)=> console.log(`hello ${args[0]}`);
let callDebounce = debounce(tempFun, 2000);
callDebounce('niranjan');
callDebounce('swain');

//Output: hello swain


/**
 * Throttling: It is technique to execute a function at most once after a certain time.
 */

 function throttling(fun, delay) {
    let timerId;
    return (...args)=> {
        if(timerId) return;
        
        timerId = setTimeout(()=> {
            fun(args);
            timerId = undefined;  
        }, delay);
    }
}

let tempFun1 = (...args)=> console.log(`hello ${args[0]}`);
let callThrottle = throttling(tempFun1, 2000);
callThrottle('niranjan');
callThrottle('swain');

//Output: hello niranjan