export function toCamelCase(str:string):string{
    return str.split(/[_-]/).map((word, _, array) => 
    array.indexOf(word) === 0 ? word : 
    word.charAt(0).toUpperCase() + word.slice(1)).join('')
}