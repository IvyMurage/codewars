export function multiplicationTable (size: number): number[][] { 
    return  Array.from({length:size}, (_, index) => Array.from({length: size}, (_, num) => (num + 1) * (index + 1)))
   }