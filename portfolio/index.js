console.log(
"Вёрстка соответствует макету. Ширина экрана 768px =40/48 \n" +
"Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки =10/15 \n" +
"На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n"

)

const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav-header');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

function switchMenu() {
  burgerBtn.classList.toggle('open');
  nav.classList.toggle('adaptive');
  navList.classList.toggle('adaptive');
}
burgerBtn.addEventListener('click', switchMenu);

// const hamburger = document.querySelector('.burger');
// const navMenu = document.querySelector('.nav-header');
// hamburger.onclick = () => {
//     navMenu.classList.toggle('adaptive');
// }

function closeMenu() {
  setTimeout(() => {
    burgerBtn.classList.remove('open');
    nav.classList.remove('adaptive');
    navList.classList.remove('adaptive');
  }, 2000);  

}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));



