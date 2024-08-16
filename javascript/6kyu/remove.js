Array.prototype.remove = function (pred) {
    let removedItems = [];
    let nextIndex = 0;  
  
    for (let i = 0; i < this.length; i++) {
      if (pred(this[i])) {
        removedItems.push(this[i]);  
      } else {
        this[nextIndex] = this[i];  
        nextIndex++;
      }
    }
  
    this.length = nextIndex;
  
    return removedItems;
  };
  