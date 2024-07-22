export function points(games : string[]): number {
    return games.reduce((sum, point) => {
      return +point[0] > +point[2] ? sum+= 3 : +point[0] === +point[2] ? sum+= 1 : sum
    },0)
  }

  console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])) // 30