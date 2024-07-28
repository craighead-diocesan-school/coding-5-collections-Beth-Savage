// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Science',
  'Music',
]
function showSubjects() {
  alert(subjects)
}

function addSubject() {
  let newSubject =''
  while(newSubject != 'stop'){
  newSubject = prompt('What subject do you want to add to the list')
  if(newSubject != 'stop'){
  // add a new item to the end of the subjects array
  subjects.push(newSubject)
  }
}
}

function removeSubject() {
  let index = prompt('What index do you want to remove. The numbers are English is 0, Digital Technology is 1, Science is 2 etc (until you take away one of these)')
  let arrayLength = subjects.length
  // remove 1 item at the index position of the subjects array
  if(index>= 0 && index <= arrayLength){
  subjects.splice(index, 1)
  } else{
    alert('Something went wrong')
  }
}
