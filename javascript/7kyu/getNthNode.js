function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  
  
  function getNth(node, index) {
    if (node === null) throw new Error('The linked list is empty');
    let current = node
    let count = 0;
    while(current){
      if(count === index) return current
      count++;
      current = current.next;
    }
    throw new Error('Inavlid Index')   
  }