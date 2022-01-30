const themeBtn = document.querySelector(".themelogo");
const body = document.querySelector('.body')

const lightSections = [
  ".skills-container",
  ".portfolio-container",
  ".video-container",
  ".price-container",
];

const themeTumbler = () => {
  console.log("Привет");

 
//   body.classList.toggle("light-theme");

  lightSections.forEach((elem) => {
    const lightTheme = document.querySelector(elem);
    lightTheme.classList.toggle("light-theme");
  });
 
};
themeBtn.addEventListener("click", () => {
  themeTumbler();
});
