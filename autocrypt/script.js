const hamMenu = document.getElementById('ham-menu');
const navMenu = document.querySelector('.nav-menu');
const header = document.getElementById('header');
const slider = document.querySelector('.slider');
const body = document.body;

hamMenu.onclick = () => {
    if(navMenu.classList.contains('hide')) {
        navMenu.classList.remove('hide')
        body.style.position = "fixed";

    } else {
        navMenu.classList.add('hide');
        body.style.position = "static";       
    }   
}


window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 750) {
      header.classList.add('header-scroll');           
    } else {
      header.classList.remove("header-scroll");    
       
    }
});


const carouselIndex = 0;

document.querySelectorAll('.testimonals-nav li').forEach( (selected,i) => {
    selected.addEventListener('click', () => {
        document.querySelector('.testimonals-nav .selected').classList.remove('selected');
        document.querySelectorAll('.testimonials-card').forEach( card => {            
           card.classList.remove('green-card');
        })
        document.querySelectorAll('.testimonials-card img').forEach( quote => {
            quote.classList.remove('green-quote');
        })
        document.querySelectorAll('.testimonials-card img')[i].classList.add('green-quote');
        document.querySelectorAll('.testimonials-card')[i].classList.add('green-card');
        selected.classList.add('selected');
        slider.style.transform = 'translateX(' + (i) * -21.6 + '%)'; 
    })
})