// console.log(
// "Вёрстка валидная =10/10 \n" +
// "Вёрстка семантическая = 20/20\n" +
// "Вёрстка соответствует макету = 44/48\n" +
// "Требования к css = 12/12\n" +
// "Интерактивность, реализуемая через css = 15/20\n"

// )

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



