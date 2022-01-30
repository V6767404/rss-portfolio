// Portfolio imageset rotation

const imgsets = document.querySelectorAll('.portfolio-imgset')
const buttons = document.querySelectorAll('.portfolio-button')

const activeImgset = i => {
    for (let imgset of imgsets) {
        imgset.classList.remove('active')
    }

    imgsets[i].classList.add('active')
}

const activeButton = i => {
    for (let btn of buttons) {
        btn.classList.remove('active')
    }

    buttons[i].classList.add('active')
}

// console.log(imgsets);
// console.log(buttons);
// activeImgset(3);
// activeButton(3);


buttons.forEach((item, index) => {
    item.addEventListener('click', () => {

        activeImgset(index);
        activeButton(index);

    })
})
