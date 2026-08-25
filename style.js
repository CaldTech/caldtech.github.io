// Toggle Code Snippet Drawers
function toggleSnippet(header) {
  const box = header.parentElement;
  box.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Dark / Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if(themeToggle) themeToggle.innerHTML = '<i class="fa fa-sun"></i>';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      let currentTheme = 'light';
      if (body.classList.contains('dark-mode')) {
        currentTheme = 'dark';
        themeToggle.innerHTML = '<i class="fa fa-sun"></i>';
      } else {
        themeToggle.innerHTML = '<i class="fa fa-moon"></i>';
      }
      localStorage.setItem('theme', currentTheme);
    });
  }

  // Interactive Skill Card Filtering
  const filterTriggers = document.querySelectorAll('.filter-trigger');
  const projects = document.querySelectorAll('.projects-stack .project');
  const resetBtn = document.getElementById('reset-filter');

  filterTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const filterValue = trigger.getAttribute('data-filter');
      
      projects.forEach(project => {
        const categories = project.getAttribute('data-category');
        if (categories && categories.includes(filterValue)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });

      if (resetBtn) resetBtn.style.display = 'inline-block';
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      projects.forEach(project => {
        project.style.display = 'block';
      });
      resetBtn.style.display = 'none';
    });
  }
});
