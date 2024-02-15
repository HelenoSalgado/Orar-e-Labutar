export default function slides(){

const banner = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.slides-circle');
let iMax = banner.length;
let iMin = 0;

setInterval(() => {

    for (let i = 0; i < banner.length; i++) {

        banner[i].classList.remove('viewSlides');
        dots[i].classList.remove('circle-backgound');

    }

    dots[iMin].classList.add('circle-backgound');
    banner[iMin].classList.add('viewSlides');

    if (iMin == iMax-1) return iMin = 0;

    iMin++;

}, 5000);
}
