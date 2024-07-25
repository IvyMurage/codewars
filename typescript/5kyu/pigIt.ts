export const pigIt = (a : string) : string =>  {
    return a.split(' ').map((string) =>
    string.match(/[0-9a-zA-Z]/) ? 
    `${string.slice(1)}${string[0]}ay`:string ).join(' ')}