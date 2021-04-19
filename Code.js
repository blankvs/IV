//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  
    let res = ( s1 + s2 + s3 ) / 3
    
    if ( res >= 90 ) {
      return "A"
    }
    if ( res >= 80 ) {
      return "B"
    }
    if ( res >= 70 ) {
      return "C"
    }
    if ( res >= 60 ) {
      return "D"
    }
    if ( res <= 59 ) {
      return "F"
    }
    
    return res
  }

  //Let's play! You have to return which player won! In case of a draw return Draw!.

  const rps = (p1, p2) => {
  
    if ( p1 == p2 ) {
      return "Draw!"
    }
    
    if ( p1 == "rock" && p2 == "scissors" ) {
      return "Player 1 won!"
    }
    if ( p1 == "scissors" && p2 == "paper" ) {
      return "Player 1 won!"
    }
    if ( p1 == "paper" && p2 == "rock" ) {
      return "Player 1 won!"
    } else {
      return "Player 2 won!"
    }
    
  };

  // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

  function grow(x){

    let res = 1
    
    for ( let i = 0; i < x.length; i++) {
      res *= x[i]
    }
    
    return res 
  }