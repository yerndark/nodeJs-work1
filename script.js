const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const students = [
  { 
    name: 'Rakhat', like: 0 
  },
  {
    name: 'Yerkebulan', like: 0 
  },
  {
    name: 'Yerasyl', like: 0 
  },
  {
    name: 'Dana', like: 0 
  },
  {
    name: 'Damir', like: 0
  },
  {
    name: 'Mask', like: 0
  },
];
//публикация
myEmitter.on('publish', (name) => {
  students.push({ name, like: 0 });
  console.log(students);
});
//добавление лайков
myEmitter.on('add', (index) => {
  if (students[index]) {
    students[index].like ++;
    console.log(students);
  }
});
//удаление лайков
myEmitter.on('delete', (index) => {
  if (students[index]) {
    students[index].like = Math.max(0, students[index].like - 1);
    console.log(students);
  }
});

// Дополнительно: рандомные лайки;

students.forEach((student, index) => {
  const randomLikes = Math.floor(Math.random() * 10); 
  for (let i = 0; i < randomLikes; i++) {
    myEmitter.emit('add', index);
  }
});

// students.forEach((student, index) => {
//   myEmitter.emit('add', index);
// });


// students.forEach((student, index) => {
//   myEmitter.emit('delete', index);
// });

