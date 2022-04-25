// Responsive NavBar:

const menuHeader = document.querySelector(".navbar");
const mobile_navIcons = document.querySelector(".mobile_navbarBtn");
const mobile_iconBtns = document.querySelector(".mobile_nav_icon");

const firstIcon = document.querySelector(".fa-bars");
const secondIcon = document.querySelector(".fa-xmark");

firstIcon.addEventListener("click",()=>{
    menuHeader.classList.remove("moveRight");
    menuHeader.classList.add("moveOriginal");
    secondIcon.classList.remove("d_none");
    firstIcon.classList.add("d_none");
    // document.body.classList.remove("sticky");
});
secondIcon.addEventListener("click",()=>{
    menuHeader.classList.add("moveRight");
    menuHeader.classList.remove("moveOriginal");
    firstIcon.classList.remove("d_none");
    secondIcon.classList.add("d_none");
});


// Swiper Section:

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    // autoplay:{
    //     delay: 2500,
    //     disableOnInteraction : false
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var swiper = new Swiper(".mySwiperTestimonial", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay:{
        delay: 2500,
        disableOnInteraction : false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


// smooth scrolling effect:

const homeSection = document.querySelector(".section_home");
const teamSection = document.querySelector(".section_team");
const contactSection = document.querySelector(".contactus_section");
const servicesSection = document.querySelector(".section_service");
const aboutusSection = document.querySelector(".section_aboutus");

const contactMeBtn = document.querySelector(".home_btn");
console.log(contactMeBtn);


document.querySelector(".home_link").addEventListener("click",()=>{
  homeSection.scrollIntoView({behavior:"smooth"});
    menuHeader.classList.add("moveRight");
    menuHeader.classList.remove("moveOriginal");
    firstIcon.classList.remove("d_none");
    secondIcon.classList.add("d_none");
});

document.querySelector(".about_link").addEventListener("click",()=>{
    aboutusSection.scrollIntoView({behavior:"smooth"});
    menuHeader.classList.add("moveRight");
    menuHeader.classList.remove("moveOriginal");
    firstIcon.classList.remove("d_none");
    secondIcon.classList.add("d_none");
});

document.querySelector(".services_link").addEventListener("click",()=>{
    servicesSection.scrollIntoView({behavior:"smooth"});
    menuHeader.classList.add("moveRight");
    menuHeader.classList.remove("moveOriginal");
    firstIcon.classList.remove("d_none");
    secondIcon.classList.add("d_none");
});

document.querySelector(".team_link").addEventListener("click",()=>{
    teamSection.scrollIntoView({behavior:"smooth"});
    menuHeader.classList.add("moveRight");
    menuHeader.classList.remove("moveOriginal");
    firstIcon.classList.remove("d_none");
    secondIcon.classList.add("d_none");
});

document.querySelector(".contact_link").addEventListener("click",()=>{
    contactSection.scrollIntoView({behavior:"smooth"});
    menuHeader.classList.add("moveRight");
    menuHeader.classList.remove("moveOriginal");
    firstIcon.classList.remove("d_none");
    secondIcon.classList.add("d_none");
});

contactMeBtn.addEventListener("click",()=>{
    contactSection.scrollIntoView({behavior:"smooth"});
    menuHeader.classList.add("moveRight");
    menuHeader.classList.remove("moveOriginal");
    firstIcon.classList.remove("d_none");
    secondIcon.classList.add("d_none");
});


