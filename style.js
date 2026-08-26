// Toggle Code Snippet Drawers
function toggleSnippet(header) {
  const box = header.parentElement;
  box.classList.toggle('active');
}

// Category Tab Filtering Logic
function filterCategory(category, buttonElement) {
  const projects = document.querySelectorAll('.projects-stack .project');
  const tabs = document.querySelectorAll('.tab-btn');
  const resetBtn = document.getElementById('reset-filter');

  // Update active tab styling
  tabs.forEach(tab => {
    tab.style.background = 'inherit';
    tab.style.color = 'inherit';
  });
  buttonElement.style.background = '#2563eb';
  buttonElement.style.color = '#fff';

  // Filter project cards
  projects.forEach(project => {
    const categories = project.getAttribute('data-category');
    if (category === 'all' || (categories && categories.includes(category))) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  if (resetBtn) {
    resetBtn.style.display = (category === 'all') ? 'none' : 'inline-block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Animate Skill Progress Bars on Load
  const skillFills = document.querySelectorAll('.skill-bar-fill');
  skillFills.forEach(fill => {
    const targetWidth = fill.getAttribute('data-width');
    if (targetWidth) {
      setTimeout(() => {
        fill.style.width = targetWidth;
      }, 200);
    }
  });

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

  // Interactive Skill Card Filtering (Matches Tab Behavior)
  const filterTriggers = document.querySelectorAll('.filter-trigger');
  const projects = document.querySelectorAll('.projects-stack .project');
  const resetBtn = document.getElementById('reset-filter');
  const tabs = document.querySelectorAll('.tab-btn');

  filterTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const filterValue = trigger.getAttribute('data-filter');
      
      // Reset tab button highlights when filtering via skills
      tabs.forEach(tab => {
        tab.style.background = 'inherit';
        tab.style.color = 'inherit';
      });

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
      // Reset tab button back to 'All'
      tabs.forEach((tab, index) => {
        if(index === 0) {
          tab.style.background = '#2563eb';
          tab.style.color = '#fff';
        } else {
          tab.style.background = 'inherit';
          tab.style.color = 'inherit';
        }
      });
      resetBtn.style.display = 'none';
    });
  }
});
