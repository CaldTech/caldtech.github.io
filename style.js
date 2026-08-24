// Reliable mobile menu toggle via class assignment
function toggleMenu(){
  let nav = document.getElementById("nav");
  if(nav.classList.contains("active")){
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
}

// Function to animate skill progress bars to their data-width values
function animateSkillBars() {
  const progressBars = document.querySelectorAll('.skill-bar-fill');
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    if (targetWidth) {
      bar.style.width = targetWidth;
    }
  });
}

// Initialize triggers when page loads
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
  
  // Guaranteed fallback: fills progress bars automatically after 800ms to prevent mobile rendering snags
  setTimeout(animateSkillBars, 800);
});
