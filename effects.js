const mobileRadio = document.getElementById("mobile");
const desktopRadio = document.getElementById("desktop");
const desktopGrid = document.getElementById("Desktop-games");
const mobileGrid = document.getElementById("mobile-games");
const burgerBtn = document.getElementById("burger");
const faqItems = document.querySelectorAll(".faq-item");
const mobileNav = document.querySelector(".mobile-nav");


faqItems.forEach((item) => {
    const faQuestion = item.querySelector(".faq-question");
    const faqAnswer = item.querySelector(".faq-answer");
    const arrowBtn = faQuestion.querySelector(".faq-toggler img");
    arrowBtn.addEventListener("click", () => {
        if(faqAnswer.style.display == "none"){
            faqAnswer.style.display = "block";
            arrowBtn.style.transform = "rotate(180deg)";
        }
        else{
            faqAnswer.style.display = "none";
            arrowBtn.style.transform = "rotate(0)";
        }
    });
});

burgerBtn.addEventListener("click" , () =>{
  
    if(mobileNav.style.left == "-2000px"){
     mobileNav.style.left = 0 ;
     
   }
    else {
     mobileNav.style.left = "-2000px" ;
   }
   }
 )

mobileRadio.addEventListener("change", () =>{
    if(window.innerWidth > 767){
        if(mobileRadio.checked){
            mobileGrid.style.display = "grid";
            desktopGrid.style.display = "none";  
        }
    }
    
    else{
        if(mobileRadio.checked){
            mobileGrid.style.display = "flex";
            desktopGrid.style.display = "none";  
        }
    }
   
})

desktopRadio.addEventListener("change", () =>{
    if(window.innerWidth > 767){
        if(desktopRadio.checked){
            desktopGrid.style.display = "grid";
            mobileGrid.style.display = "none";
        }
    }
    else {
        if(desktopRadio.checked){
            desktopGrid.style.display = "flex";
            mobileGrid.style.display = "none";
        }
    }
    
   
})




