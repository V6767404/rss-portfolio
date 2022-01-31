// Themes dark/light rotation

const themeBtn = document.querySelector(".themelogo");
const body = document.querySelector('body')
const golds = document.querySelectorAll('.title-gold')
const portBtns = document.querySelectorAll('.portfolio-button')


const lightSections = [
  ".skills-container",
  ".portfolio-container",
  ".video-container",
  ".price-container",
];

const themeSwitch = () => {
  // console.log("Sun-Moon");

  body.classList.toggle("light-theme");
  themeBtn.classList.toggle("moon");
  
  // const headerAd = document.querySelector('.nav-header.adaptive')
  // if (headerAd.target.classList.contains('adaptive')){
  //   headerAd.classList.toggle("moon");
  // }

  lightSections.forEach((elem) => {
    const lightTheme = document.querySelector(elem);
    lightTheme.classList.toggle("light-theme");
  });

  golds.forEach((elem) => {
    elem.classList.toggle("light-theme");
  });

  portBtns.forEach((elem) => {
    elem.classList.toggle("light-theme");
  });
  

};
themeBtn.addEventListener("click", () => {
  themeSwitch();
});
