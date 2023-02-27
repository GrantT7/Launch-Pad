// Shows and hides the nav links on mobile
const navLinks = document.getElementById('navLinks');
    
function showMenu(){
  navLinks.style.right = '0';
}
    
function hideMenu(){
  navLinks.style.right = '-200px'
}


// This section changes the nav bar from a transparent background to a black background

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro"); //.home-intro sets the point at which the header will transition  in html

const sectionOneOptions = {
  rootMargin: "-650px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);