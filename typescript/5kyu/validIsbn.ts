export function validISBN10(isbn: string): boolean {
    if(isbn.length < 10 || isbn.length > 10) return false
   return isbn.split('').reduce((sum, value, index) => {
      let isbnValue = value === 'X' && index === isbn.length - 1  ? 
      (index + 1) * 10 : 
      (index + 1) * +value
      sum += isbnValue
      return sum
    }, 0) % 11 === 0 ? true : false
    
  }