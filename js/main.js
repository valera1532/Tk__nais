//Burger

const burgerBtn = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', ()=>{
    body.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
});

//Accordion

const accordions = Array.from(document.querySelectorAll('.faq__accordion-title'));

accordions.forEach((accordion) =>{
    accordion.addEventListener('click', accordionHandler)
})

function accordionHandler(e){
    e.preventDefault();
    let currentAccordion = e.target.closest('.faq__accordion-item');
    let currentContent = e.target.nextElementSibling;
    console.log(currentContent)
    currentAccordion.classList.toggle('active');
    if(currentAccordion.classList.contains('active')) currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    else currentContent.style.maxHeight = 0;
}
