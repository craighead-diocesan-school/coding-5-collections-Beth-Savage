// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man',
}

function showSubject() {
  alert(subject.name + ' in ' + subject.room + ' with ' + subject.teacher )
}

function changeSubject() {
  let newName = 'Typing Skills'

  subject.name = newName
}

function changeTeacher () {
  let newTeacher = prompt('What is the new name of the teacher?')

  subject.teacher = newTeacher
}
