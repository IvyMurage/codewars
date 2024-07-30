String.prototype.toJadenCase = function () {
    return this.split(' ').map((word:string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
  
  
  interface String {      // Declaration needed, don't remove it
    toJadenCase(): string;
  }
  