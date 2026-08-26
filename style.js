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

  // Category Tab Filtering Logic (Fixed Event Listener Binding)
  const tabs = document.querySelectorAll('.tab-btn');
  const projects = document.querySelectorAll('.projects-stack .project');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-cat');

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
});
