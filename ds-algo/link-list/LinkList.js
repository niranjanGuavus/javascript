/* LinkList*/
function LinkList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
  
  LinkList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if(this.head){
      this.head.prev = newNode; 
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }
  
  LinkList.prototype.AddToTail = function (value){
    var newNode = new Node(value, null, this.tail);
    if(this.tail){
      this.tail.next = newNode; 
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }
  
  LinkList.prototype.removeHead = function() {
    if(!this.head) return null;
    this.head = this.head.next; 
    if(this.head){
      this.head.prev = null
    } else {
      this.tail = null
    }
  }
  
  LinkList.prototype.RemoveTail = function() {
    if(!this.tail) return null;
    this.tail = this.tail.prev
    if(this.tail){ 
      this.tail.next = null;
    } else {
      this.head = null;
    }
  }
  
  var ll = new LinkList();
   ll.AddToTail(30);
  ll.AddToTail(20);
  ll.AddToTail(10);
  
  ll.addToHead(100);
  //ll.removeHead();
  ll.RemoveTail();
  console.log(ll);