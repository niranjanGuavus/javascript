/**
 * Create a event register class with accept key and callback function as subscribe.
 * the same key can have multiple callback however when it release that subscription that particular entries should remove.
 * 
 * there should be an emit it accept the key and run the callback. the emit can be class level or subscription level.
 */


 class EventEmitter {

  constructor() {
    this.eventRegisterMap = new Map();
  }

  subscribe(name, callback) {
    let callbackIndex = 0
    
    if(this.eventRegisterMap.has(name)){
      this.eventRegisterMap.get(name).push(callback)
      callbackIndex = this.eventRegisterMap.get(name).length - 1;
    }else {
      this.eventRegisterMap.set(name, [callback]);
    }

    return {
      name:name,

      emit: (...args) => {
        let callbackList = this.eventRegisterMap.get(name);
        if(callbackList.length>0) {
          callback.apply(this, args);
        }
      },

      release: () => {
        //todo we can do the null check
        let callbackList = this.eventRegisterMap.get(name);
        callbackList.splice(callbackIndex, 1);
      }
    }
  }

  emit(name, ...args) {
    let callbackList = this.eventRegisterMap.get(name);
    callbackList.forEach(element => {
      element.apply(this, args);
    });
  }
}


let emitter = new EventEmitter();

let sub1 = emitter.subscribe('f1', (a)=> console.log('hello1', a));
let sub2 = emitter.subscribe('f1', (a, b)=> console.log('hello2', a,b));
let sub3 = emitter.subscribe('f3', ()=> console.log('hello3'));


 emitter.emit('f1', 'niranjan'); // hello1 niranjan  hello2 niranjan undefined
 emitter.emit('f1', 'niranjan', 'swain');// hello1 niranjan  hello2 niranjan swain
 emitter.emit('f3'); // hello3

 sub1.emit('niranjan', 'swain');  //hello1 niranjan
 sub2.emit('niranjan', 'swain'); //hello2 niranjan swain


sub1.release();

emitter.emit('f1'); // hello2 undefined undefined
