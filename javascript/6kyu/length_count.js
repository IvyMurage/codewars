function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    let temp = head;
    let count = 0;
    
    while(temp !== null){
      count++;
      temp = temp.next;
    }
    return count;
  }
  
  function count(head, data) {
    let temp = head;
    let count = 0;
    while(temp !== null){
      if(temp.data === data) count++
      temp = temp.next;
    }
    return count;  
  }