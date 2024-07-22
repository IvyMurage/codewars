export function rowWeights(arr: number[]) {
    let team1 = 0
    let team2 = 0
    arr.forEach((weight, index) => index % 2 === 0 ? team1 += weight : team2 += weight)
    return [team1, team2]
  }
  