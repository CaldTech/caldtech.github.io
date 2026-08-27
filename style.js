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

  // Category Tab Filtering Logic
  const tabs = document.querySelectorAll('.tab-btn');
  const projects = document.querySelectorAll('.projects-stack .project');
  const searchInput = document.getElementById('project-search');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-cat');

      // Clear search input when using tabs
      if (searchInput) searchInput.value = '';

      // Update active styling across tabs
      tabs.forEach(t => {
        t.style.background = 'inherit';
        t.style.color = 'inherit';
      });
      tab.style.background = '#2563eb';
      tab.style.color = '#fff';

      // Filter project cards visibility
      projects.forEach(project => {
        const categories = project.getAttribute('data-category');
        if (category === 'all' || (categories && categories.includes(category))) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });

  // Live Keyword Search Bar Logic (Option 1)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      projects.forEach(project => {
        const keywords = project.getAttribute('data-keywords') || '';
        const textContent = project.textContent.toLowerCase();

        if (keywords.includes(query) || textContent.includes(query)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  }
});
