// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  5,
  100,
  1000,
  10000,
  987654321,
  1234567890,
  122333444455555,


]

function searchNumbers() {
  let searchTarget = prompt('What number do you want to search for?')
  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  }
  if(searchResult == true){
    alert(searchTarget + ' was found on the list :)')
  } else if(searchResult ==false){
    alert(searchTarget + ' was not found on the list :(')
  } else{
    alert('What did you put in. It just breaks the code.')
  }
  
}
