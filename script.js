console.log('Hi, welcome to my portfolio!');

const cYear = document.querySelector('.year');
const dateNow = new Date();
const gotYear = dateNow.getFullYear();

cYear.innerText = gotYear;