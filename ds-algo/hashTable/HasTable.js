// Hash table
/** create a has table function **/
function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }
  
  function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
  
  HashTable.prototype.hash = function (key) {
    var total = 0;
    for (var i =0; i< key.length; i++){
      total += key.charCodeAt(i);
    }
    return total%this.numBuckets;
  }
  
  HashTable.prototype.insert = function(key, value) {
    var bucketId = this.hash(key);
    if(!this.buckets[bucketId]) this.buckets[bucketId] = new HashNode(key,value);
    else if(this.buckets[bucketId].key === key) {
      this.buckets[bucketId].value = value
    }
    else {
      var currentNode = this.buckets[bucketId];
      while(currentNode.next) {
        if(currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = bucketNode.next;
      }
      currentNode.next = new HashNode(key,value);
    }
  }
  
  HashTable.prototype.get = function(key) {
    var bucketId = this.hash(key);
    var searchNode = this.buckets[bucketId]
    if(!searchNode) return null;
    else {
      while(searchNode) {
        if(searchNode.key === key) return searchNode.value;
        else searchNode = searchNode.next;
      }
    }
  }
  
  HashTable.prototype.retrieveAll = function() {
    for(var i=0; i<this.numBuckets; i++) {
      var currentNode = this.buckets[i];
      while(currentNode) {
        console.log(currentNode.key ,'::',currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
  
  var myHT  = new HashTable(30);
  myHT.insert('niranjan', 'niranjan@gmail.com');
  myHT.insert('hello', 'hello@gmail.com');
  myHT.insert('nrianjan', 'niranjan@thales.com');
  myHT.insert('niranjan', 'niranjan@guavus.com');
  myHT.insert('nrianjan', 'niranjan.swain@thales.com');
  console.log(myHT.buckets[9]);
  console.log(myHT.get('nrianjan'));
  console.log(myHT.retrieveAll());
  