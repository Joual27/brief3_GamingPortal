
const navbarItems= document.querySelector(".nav-items");
const backgroundImg = document.querySelector(".home-bg");
const contactBtn = document.getElementById("contactUs");
const logo = document.getElementById("logo");
const hero = document.querySelector(".hero");
const mainText = document.querySelector(".hero h1");
const animatedText = document.querySelector(".animation-text");
const mainArrow = document.querySelector(".arrow");
const navToggler = document.querySelector(".burger");
const descriptionContainer = document.querySelector(".desc-container");
const divider = document.querySelector(".divider");
const descriptionContent = document.querySelector(".desc-content");
const descriptionTitle = document.querySelector(".desc-content h3");
const descriptionImg = document.querySelector(".desc-img");
const articles = document.querySelector(".articles-container");
const articlesList = document.querySelectorAll(".articles-container .articles-card");
const mobileGamesDescription = document.querySelector(".mobile-content");
const competCards = document.querySelector(".compet-container");
const competCard = document.querySelector(".compet-card");
const competitionCards = document.querySelectorAll(".compet-container .compet-card");
const contact = document.querySelector(".contact-form");
const contactForm = document.querySelector(".contact-form form");
const contactImg = document.querySelector(".contact-form img");
const testimonials = document.querySelector(".scroll-container");
const testiSection = document.querySelector(".testimonials");
const copyRight = document.querySelector("footer h3");
const arrowLeft = document.getElementById("arrowL");
const arrowRight = document.getElementById("arrowR");





var competStyles = {
    width : "80%",
    marginLeft :"10%", 
}






window.addEventListener("load", () => {

  if(window.innerWidth < 768){
    navbarItems.style.display = "none" ;
    backgroundImg.style.objectFit = "cover";
    contactBtn.style.display = "none";
    mainText.style.fontSize = "1.5rem";
    animatedText.style.fontSize = "1.35rem";
    mainArrow.style.position = "absolute";
    mainArrow.style.left = "44%";
    navToggler.style.display = "block";
    descriptionContainer.style.flexDirection = "column";
    divider.style.display = "none";
    descriptionContent.style.width = "100%";
    descriptionImg.style.width = "100%";
    descriptionTitle.style.textAlign = "center";
    articles.style.flexDirection = "column";
    articles.style.gap = "20px"
    articlesList.forEach((article) =>{
      for ( const prop in competStyles){
        if(competStyles.hasOwnProperty(prop)){
          article.style[prop] = competStyles[prop];
        }
      }
    })
    
    mobileGamesDescription.style.left = "2.5%";
    mobileGamesDescription.style.width = "100%";
    competCards.style.flexDirection = "column";
    competCards.style.gap = "20px";
    competCards.style.minHeight= "1300px";
    competitionCards.forEach((competitionCard) => {
      for (const property in competStyles){
        if(competStyles.hasOwnProperty(property)){
          competitionCard.style[property] = competStyles[property];
        }
      }
    }) ;
    contact.style.flexDirection = "column-reverse";
    contactForm.style.width = "100%";
    contactImg.style.width = "100%";
    contactImg.style.height = "300px";
    contactImg.style.marginBottom = "20px";
    testimonials.style.minHeight = "300px";
    testimonials.style.width = "100%";
    copyRight.style.fontSize = "0.7rem" ;
    arrowLeft.style.left = 0;
    arrowRight.style.right = 0;
  }
})

var typed = new Typed('#animation-text', {
    strings: ['GO BEYOND YOUR LIMITS . . .', 'PROVE THAT U ARE THE BEST . . . ', 'ENJOY THE GAMES . . .'],
    typeSpeed: 100,
    backSpeed : 75,
    loop:true ,
  });


