export function persistence(num: number): number {  
    let count = 0
    const multiplier = (num: number) => {
    return num.toString().split('').reduce((product, value) => 
        product *= +value
    , 1)}
    while(num >= 10) {
        num = multiplier(num)
        count++
    }
    return count
}
console.log(persistence(39)) // 3