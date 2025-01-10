const images = document.querySelectorAll('.header-slider ul img');
const prevs = document.querySelector('.prev');
const nexts = document.querySelector('.next');
let n = 0;
function changeslide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[n].style.display = 'block';
}

changeslide();

prevs.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = images.length - 1; 
    }
    changeslide();
});

nexts.addEventListener('click', (e) => {
    if (n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeslide();
});
const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft+=e.deltaY;
    })
}
const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');
const imagesWrapper = document.querySelector('.images-wrapper');
const shopCols = document.querySelectorAll('.shop-col');
let slideWidth = shopCols[0].offsetWidth;
let totalSlides = shopCols.length;
let currentIndex = 0;
function updateSliderWidth() {
    slideWidth = shopCols[0].offsetWidth;
    totalSlides = shopCols.length;
    updateSliderPosition();
}
function updateSliderPosition() {
    const offset = -(currentIndex * slideWidth);
    imagesWrapper.style.transform = `translateX(${offset}px)`;
}
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSliderPosition();
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
});
window.addEventListener('resize', updateSliderWidth);
