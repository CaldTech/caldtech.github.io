// Reliable mobile menu toggle using an active class
function toggleMenu(){
  let nav = document.getElementById("nav");
  if(nav.classList.contains("active")){
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
}

// Scroll animation trigger for skill progress bars
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-bar-fill');
        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          bar.style.width = targetWidth;
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});
