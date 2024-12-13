function stringify(list) {
    let stringifiedLinkedList = ''
    let node = list
    
    while(node){
      stringifiedLinkedList += node.data + ' -> '
      node = node.next
    }
    stringifiedLinkedList += 'null'
    return stringifiedLinkedList;
    
  }