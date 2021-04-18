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