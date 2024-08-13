function bingo(ticket, win){
    const bingo = ticket.map((row) => [...row[0]].some((num, index) => num.charCodeAt(index) === row[1]));
      console.log(bingo)
      return bingo.filter(lot => lot === true).length === win ? 'Winner!' : 'Loser!'
    }