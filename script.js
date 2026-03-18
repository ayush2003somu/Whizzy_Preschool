// Header blur effect on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Grab all elements with the 'hidden' class and observe them
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");
window.onload = function(){
setTimeout(function(){
popup.style.display = "flex";
},1000);
closeBtn.addEventListener("click", function(){
popup.style.display = "none";
});
};

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
nav.style="margin-top:80px"
if(nav.classList.contains("active")){
toggle.innerHTML = "&times;";
}else{
toggle.innerHTML = "&#9776;";
}
});


//<-----------Slide carousel ---------->

// const slide = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const len = slides.length;
var counter = 0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`
    }
)
function showSlide(){
    slides.forEach(
        (slide)=>{
            if(counter>=len)counter=0;
            else if (counter<0)counter = len-1;
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
next.addEventListener("click", ()=>{
    counter++;
    showSlide();
})
prev.addEventListener("click", ()=>{
    counter--;
    showSlide();
});
/* Auto Slide */
setInterval(()=>{
counter++;
showSlide();
},2500);
