var words = ["hello", "what", "is", "up", "dude"]

function lengths (alpha){
  var result=[]
  alpha.forEach(function(WL) {
    result.push(WL.length)
  })
  return result
}


function sumArray(alpha){
   var total = alpha.reduce(function(a,b){
    return a+ b
   })
   return total
}


function multiplyArray(alpha){
   var total = alpha.reduce(function(a,b){
    return a*b
   })
   return total
}


function findLongestWord(bravo){
  var list = lengths(bravo).sort()
  return list[list.length-1]
}



function filterLongWords (ArrWords, num){
return ArrWords.filter(function(singleword){
        if(singleword.length > num) {
          return true
        }
       })
}
