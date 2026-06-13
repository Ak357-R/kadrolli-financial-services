// Smooth Scroll Enhancement

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior: 'smooth'
});

});

});

// Navbar Shadow On Scroll

window.addEventListener('scroll', () => {

const nav = document.querySelector('.navbar');

if(window.scrollY > 50){

nav.style.boxShadow =
'0 4px 12px rgba(0,0,0,0.15)';

}else{

nav.style.boxShadow = 'none';

}

});

// Contact Form

const form = document.querySelector('form');

if(form){

form.addEventListener('submit', function(e){

e.preventDefault();

alert(
'Thank you for contacting Kadrolli Financial Services. We will contact you shortly.'
);

form.reset();

});

}
