export function orderWeight(strng: string): string {
return (strng.split(' ').map(value => ({value:value,weight: value.split('').reduce((sum, character) => { sum += +character 
    return sum
}, 0)})). 
sort((a, b) => 
    a.weight === b.weight ? a.value.localeCompare(b.value) 
    : a.weight - b.weight
)
.map(pair => pair.value).join(' '))
}