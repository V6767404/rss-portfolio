console.log(
"Смена изображений в секции portfolio +25 \n" +
"Перевод страницы на два языка +25 \n" +
"Переключение светлой и тёмной темы +10\n"

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



