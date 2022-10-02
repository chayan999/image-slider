const nextEl = document.querySelector('.next');
const imageContainerEl = document.querySelector('.image-conter');
const imgEl = document.querySelectorAll('img');

const prvEl = document.querySelector('.prv');

let timeOut;

let cruntImgage = 1;

prvEl.addEventListener('click', () => {
    cruntImgage--;
    clearTimeout(timeOut)
    imgeUpdate()
})

nextEl.addEventListener('click', () => {
    cruntImgage++
    clearTimeout(timeOut)
    imgeUpdate()
});

imgeUpdate()
function imgeUpdate() {
    if (cruntImgage > imgEl.length) {
        cruntImgage = 1;
    } else if (cruntImgage < 1) {
        cruntImgage = imgEl.length
    }
    imageContainerEl.style.transform = `translateX(-${(cruntImgage - 1) * 500}px)`

    timeOut = setTimeout(() => {
        cruntImgage++
        imgeUpdate()
    }, 3000)
};

