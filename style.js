// Global toggle function in case HTML inline onclick is triggered
function toggleMenu() {
  let nav = document.getElementById("nav");
  if (nav) {
    nav.classList.toggle("active");
  }
}

// Function to animate skill progress bars
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
  // Safe listener fallback for the hamburger button
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      toggleMenu();
    });

    // Close menu automatically when clicking any nav link on mobile
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        nav.classList.remove("active");
      });
    });
  }

  // Skill progress bars observer & fallback
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
  
  // Guaranteed fallback: fills progress bars automatically after 800ms
  setTimeout(animateSkillBars, 800);
});
