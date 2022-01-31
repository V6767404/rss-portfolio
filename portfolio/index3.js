// Language change section

const lang_ru = document.querySelector('.langselect.ru');
const lang_en = document.querySelector('.langselect.en');

function getTranslation(language){
    const dataList = document.querySelectorAll('[data-i18]');
    
    lang_ru.classList.toggle('active')
    lang_en.classList.toggle('active') 
    
        dataList.forEach((el) => {
        el.textContent = i18Obj[language][el.dataset.i18]
    });
    // console.log('done');
    

}
// console.log('start');
lang_ru.addEventListener('click', () => {getTranslation('ru')});
lang_en.addEventListener('click', () => {getTranslation('en')});