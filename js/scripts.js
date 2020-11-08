//split divide una cadena de texto

let activity = 'Im learning Js in a course from Udemy';

name = activity.split(' ');

let intereses = 'Leer, caminar, listening music';
name = intereses.split(', ');

console.log(name);

//Reemplazar un valor
nameTwo = activity.replace('Js','JavaScript');
//El primer parametro es lo que se desea reemplazar y el segundo parametro es lo que lo reemplaza

console.log(nameTwo);