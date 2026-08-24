// Reliable mobile menu toggle
function toggleMenu(){
  let nav = document.getElementById("nav");
  if(nav.classList.contains("active")){
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
}

// Function to trigger skill bars
function animateSkillBars() {
  const progressBars = document.querySelectorAll('.skill-bar-fill');
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    bar.style.width = targetWidth;
  });
}

// Scroll animation trigger with instant fallback for mobile
document.addEventListener("DOMContentLoaded", function() {
  const skillsSection = document.querySelector('#skills');
  
  if (skillsSection) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 }); // Lower threshold so it triggers earlier on mobile

    observer.observe(skillsSection);
  }
  
  // Fallback: If bars haven't animated after 1.5 seconds, force them to load (guarantees mobile visibility)
  setTimeout(animateSkillBars, 1500);
});
