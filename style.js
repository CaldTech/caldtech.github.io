// Toggle Code Snippet Drawers
function toggleSnippet(header) {
  const box = header.parentElement;
  box.classList.toggle('active');
}

// Deep Dive Modal Data & Controller
const deepDiveData = {
  medical: {
    title: "Medical Revenue Data Pipeline & Automation",
    tech: "Python, SQLite, Pandas, GitHub",
    details: "Built to handle automated ingestion of complex financial and clinical extracts. Features robust data validation routines to catch null entries, automated CSV-to-SQLite conversion, and structured error logs to safeguard enterprise reporting workflows."
  },
  samsung: {
    title: "Samsung Tablet Screen Repair & Hardware Restoration",
    tech: "Precision Electronics, Heat Stations, Diagnostic Scripts",
    details: "Comprehensive hardware teardown and restoration walkthrough. Focuses on safe digitizer separation, ribbon cable preservation, waterproof adhesive sealing, and mobile environment testing routines (Termux/Pydroid)."
  },
  banana: {
    title: "BANANA FRITTERS // Creator Culinary Guide",
    tech: "Kitchen Automation, Short-Form Content Production",
    details: "Part of the Chef Joe creator series. Focuses on minimizing food waste by repurposing overripe bananas into high-retention short-form video content optimized for YouTube Shorts and TikTok engagement hooks."
  }
};

function openModal(projectKey) {
  const modal = document.getElementById('project-modal');
  const bodyContent = document.getElementById('modal-body-content');
  const data = deepDiveData[projectKey];

  if (data) {
    bodyContent.innerHTML = `
      <h3 style="font-size:20px; margin-bottom:10px; color:#2563eb;">${data.title}</h3>
      <p style="font-size:12px; font-weight:600; color:#64748b; margin-bottom:15px; text-transform:uppercase;">Stack: ${data.tech}</p>
      <p style="font-size:14px; line-height:1.7; text-align:left; color:inherit;">${data.details}</p>
    `;
    modal.style.display = 'flex';
  }
}

function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}

function closeModalOutside(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
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

      if (searchInput) searchInput.value = '';

      tabs.forEach(t => {
        t.style.background = 'inherit';
        t.style.color = 'inherit';
      });
      tab.style.background = '#2563eb';
      tab.style.color = '#fff';

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

  // Live Keyword Search Bar Logic
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
