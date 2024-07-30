export function humanReadable(seconds:number):string {
    let hours = Math.floor(seconds / 3600)   
    let minutes = Math.floor((seconds % 3600) / 60)
    let second = Math.floor((seconds % 3600) % 60)
    
    return `${ hours > 9 ? `${hours}` : `0${hours}`}` + 
      `:${ minutes > 9 ? `${minutes}` : `0${minutes}`}` + 
      `:${ second > 9 ? `${second}` : `0${second}`}` 
  }