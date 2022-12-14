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


// This displays the success/fail message after a form submission
function message(){
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = dicument.getElementById('phone');
  const subject = document.getElementById('subject');
  const msg = document.getElementById('msg');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if(name.value === '' || email.value === '' || phone === '' || subject === '' || msg.value === ''){
      danger.style.display = 'block';
  } else {
      setTimeout(() => {
          name.value = '';
          email.value = '';
          phone.value = '';
          subject.value = '';
          msg.value = '';
      }, 2000);

      success.style.display = 'block';
  }


  setTimeout(() => {
      danger.style.display = 'none';
      success.style.display = 'none';
  }, 4000);

}

// newsletter signup success/fail message
function newsletterSignup(){
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterSuccess = document.getElementById('newsletter-success');
  const newsletterDanger = document.getElementById('newsletter-danger');
  if(newsletterEmail.value === ''){
    newsletterDanger.style.display = 'block';
} else {
    setTimeout(() => {
        newsletterEmail.value = '';
    }, 2000);

    newsletterSuccess.style.display = 'block';
}


setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
}, 4000);
}