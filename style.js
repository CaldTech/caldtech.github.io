// Reliable mobile menu toggle via class
function toggleMenu(){
  let nav = document.getElementById("nav");
  if(nav.classList.contains("active")){
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
}

// Function to guarantee skill progress bars animate
function animateSkillBars() {
  const progressBars = document.querySelectorAll('.skill-bar-fill');
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    bar.style.width = targetWidth;
  });
}

// Scroll animation trigger with mobile fallback
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
    }, { threshold: 0.05 });

    observer.observe(skillsSection);
  }
  
  // Instant fallback to force mobile bars to load if observer is skipped by mobile webviews
  setTimeout(animateSkillBars, 1000);
});
