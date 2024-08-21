function solve(a, b) {
    if(b.length > a.length) return 0;
      
    const stringHash = a.split('')
    
    for(const character of b){
      if(!stringHash.includes(character)) return 0;
      stringHash.splice(stringHash.indexOf(character), 1)
    }
    
    return stringHash.length
    };