function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    const node = new Node(data)
    node.next = head;
    head = node;
    return head
  }
  
  function buildOneTwoThree() {
    let chained = null
    chained = push(chained, 3)
    chained = push(chained, 2)
    chained = push(chained, 1)
    return chained
    
  }