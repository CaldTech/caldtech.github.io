// Mobile Navigation Toggle, Skill Filtering, Code Snippet Toggles & Dark Mode
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // Animate skill bars on load
  const skillFills = document.querySelectorAll('.skill-bar-fill');
  skillFills.forEach(fill => {
    const targetWidth = fill.getAttribute('data-width');
    setTimeout(() => {
      fill.style.width = targetWidth;
    }, 200);
  });

  // --- Interactive Skill Filters ---
  const filterTriggers = document.querySelectorAll('.filter-trigger');
  const projects = document.querySelectorAll('.project');
  const resetBtn = document.getElementById('reset-filter');

  filterTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const filterValue = trigger.getAttribute('data-filter');

      // Highlight active skill card
      filterTriggers.forEach(s => s.classList.remove('active-filter'));
      trigger.classList.add('active-filter');

      // Filter project stack
      projects.forEach(project => {
        const categories = project.getAttribute('data-category');
        if (categories && categories.includes(filterValue)) {
          project.classList.remove('filtered-out');
        } else {
          project.classList.add('filtered-out');
        }
      });

      if (resetBtn) resetBtn.style.display = 'inline-block';
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      projects.forEach(project => project.classList.remove('filtered-out'));
      filterTriggers.forEach(s => s.classList.remove('active-filter'));
      resetBtn.style.display = 'none';
    });
  }

  // --- Dark/Light Mode Theme Toggle ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check saved theme preference
  const savedTheme = localStorage.getItem('portfolio_theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa fa-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      
      if (isDark) {
        localStorage.setItem('portfolio_theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fa fa-sun"></i>';
      } else {
        localStorage.setItem('portfolio_theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa fa-moon"></i>';
      }
    });
  }
});

// --- Quick Code Snippet Toggle Function ---
function toggleSnippet(headerElem) {
  const box = headerElem.parentElement;
  box.classList.toggle('active');
}
