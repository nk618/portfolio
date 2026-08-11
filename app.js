// ============================================================
// Portfolio App — Main Application Logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData;
  if (!data) {
    console.error('portfolioData not found');
    return;
  }

  // --- HELPER: getLucideIcon(name, size) ---
  // Returns inline SVG strings for Lucide icons used throughout the site.
  function getLucideIcon(name, size = 20) {
    const icons = {
      'code': '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
      'globe': '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
      'bar-chart-2': '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
      'pie-chart': '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
      'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
      'github': '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
      'linkedin': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
      'mail': '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
      'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
      'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
      'send': '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
      'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
      'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
      'award': '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
      'trophy': '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>',
      'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
      'sun': '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
      'moon': '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
      'menu': '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
      'x': '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
      'arrow-up': '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
      'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
      'briefcase': '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
      'graduation-cap': '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>',
      'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
      'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
      'target': '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
      'chevron-right': '<polyline points="9 18 15 12 9 6"></polyline>',
      'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
      'database': '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
      'image': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>'
    };

    const svgContent = icons[name] || '';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgContent}</svg>`;
  }

  // --- 1. renderNavbar() ---
  function renderNavbar() {
    const navLinksContainer = document.getElementById('nav-links');
    if (navLinksContainer && data.navLinks) {
      navLinksContainer.innerHTML = data.navLinks.map(link =>
        `<li><a href="${link.href}" class="nav-link">${link.label}</a></li>`
      ).join('');
    }
  }

  // --- 2. renderHero() ---
  function renderHero() {
    const heroContent = document.querySelector('#hero .hero-content');
    if (!heroContent || !data.personal) return;

    heroContent.innerHTML = `
      <div class="hero-badge">✦ Available for opportunities</div>
      <h1 class="hero-name gradient-text">${data.personal.name}</h1>
      <h2 class="hero-title">${data.personal.title}</h2>
      <p class="hero-tagline">${data.personal.tagline}</p>

      <div class="hero-buttons">
        <a href="${data.personal.resumeLink || '#'}" class="btn-primary" target="_blank" rel="noopener noreferrer">
          ${getLucideIcon('download', 18)} Download Resume
        </a>
        ${data.personal.interactiveResume ? `
        <a href="${data.personal.interactiveResume}" class="btn-secondary" target="_blank" rel="noopener noreferrer">
          ${getLucideIcon('external-link', 18)} Interactive Resume
        </a>` : ''}
        <a href="#contact" class="btn-secondary">
          ${getLucideIcon('send', 18)} Contact Me
        </a>
      </div>

      <div class="hero-links">
        ${data.personal.linkedin ? `<a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${getLucideIcon('linkedin', 22)}</a>` : ''}
        ${data.personal.github ? `<a href="${data.personal.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${getLucideIcon('github', 22)}</a>` : ''}
        ${data.personal.email ? `<a href="mailto:${data.personal.email}" aria-label="Email">${getLucideIcon('mail', 22)}</a>` : ''}
        ${data.personal.phone ? `<a href="tel:${data.personal.phone}" aria-label="Phone">${getLucideIcon('phone', 22)}</a>` : ''}
      </div>
    `;
  }

  // --- 3. renderAbout() ---
  function renderAbout() {
    const aboutContent = document.querySelector('#about .about-content');
    if (!aboutContent || !data.about || !data.about.paragraphs) return;

    aboutContent.innerHTML = `
      <div class="about-text">
        ${data.about.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
    `;
  }

  // --- 4. renderSkills() ---
  function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid || !data.skills) return;

    skillsGrid.innerHTML = data.skills.map((category, i) => `
      <div class="skill-card fade-in fade-in-delay-${(i % 3) + 1}">
        <div class="skill-card-header">
          <div class="skill-icon">${getLucideIcon(category.icon || 'code')}</div>
          <span class="skill-category">${category.category}</span>
        </div>
        ${category.items.map(skill => `
          <div class="skill-item">
            <div class="skill-name">
              <span>${skill.name}</span>
              <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-bar-fill" data-width="${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  // --- 5. renderExperience() ---
  function renderExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline || !data.experience) return;

    timeline.innerHTML = data.experience.map(item => `
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <h3 class="timeline-role">${item.role}</h3>
          <h4 class="timeline-company">${item.company}</h4>
          <div class="timeline-period">
            ${getLucideIcon('calendar', 14)}
            <span>${item.period}</span>
          </div>
          <ul class="timeline-bullets">
            ${item.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // --- 6. renderProjects() ---
  function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !data.projects) return;

    projectsGrid.innerHTML = data.projects.map((project, i) => `
      <div class="project-card fade-in fade-in-delay-${(i % 3) + 1}">
        <div class="project-image">
          ${project.image
            ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
            : `<div class="project-placeholder">
                <span style="color: var(--accent); opacity: 0.5; z-index: 1; position: relative;">${getLucideIcon('bar-chart-2', 48)}</span>
              </div>`
          }
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${(project.tags || []).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link">${getLucideIcon('github', 16)} View Code</a>` : ''}
            ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="project-link">${getLucideIcon('external-link', 16)} Live Demo</a>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- 7. renderEducation() ---
  function renderEducation() {
    const eduGrid = document.getElementById('education-grid');
    if (!eduGrid || !data.education) return;

    eduGrid.innerHTML = data.education.map(item => `
      <div class="education-card fade-in">
        <h3 class="education-degree">${item.degree}</h3>
        <p class="education-institution">${item.institution}</p>
        <div class="education-meta">
          ${item.university ? `<span>${getLucideIcon('graduation-cap', 14)} ${item.university}</span>` : ''}
          ${item.period ? `<span>${getLucideIcon('calendar', 14)} ${item.period}</span>` : ''}
          ${item.details ? `<span>${item.details}</span>` : ''}
        </div>
      </div>
    `).join('');
  }

  // --- 8. renderCertifications() ---
  function renderCertifications() {
    const certsGrid = document.getElementById('certs-grid');
    if (!certsGrid || !data.certifications) return;

    certsGrid.innerHTML = data.certifications.map(cert => `
      <div class="cert-card fade-in">
        <div class="cert-icon">${getLucideIcon('award', 28)}</div>
        <h3 class="cert-title">${cert.title}</h3>
        ${cert.year ? `<p class="cert-year">${cert.year}</p>` : ''}
        ${cert.issuer ? `<p class="cert-year">${cert.issuer}</p>` : ''}
      </div>
    `).join('');
  }

  // --- 9. renderAchievements() ---
  function renderAchievements() {
    const achGrid = document.getElementById('achievements-grid');
    if (!achGrid || !data.achievements) return;

    achGrid.innerHTML = data.achievements.map(ach => `
      <div class="achievement-card fade-in">
        <div class="achievement-icon">${getLucideIcon('trophy', 24)}</div>
        <div>
          <h3 class="achievement-title">${ach.title}</h3>
          <p class="achievement-description">${ach.description}</p>
        </div>
      </div>
    `).join('');
  }

  // --- 10. renderLanguages() ---
  function renderLanguages() {
    const langGrid = document.getElementById('languages-grid');
    if (!langGrid || !data.languages) return;

    langGrid.innerHTML = data.languages.map(lang => `
      <div class="language-card fade-in">
        <div class="language-name">${lang.name}</div>
      </div>
    `).join('');
  }

  // --- 11. renderContact() ---
  function renderContact() {
    const contactGrid = document.getElementById('contact-grid');
    if (!contactGrid || !data.personal) return;

    contactGrid.innerHTML = `
      <div class="contact-info">
        ${data.personal.email ? `
          <div class="contact-item">
            <div class="contact-icon">${getLucideIcon('mail')}</div>
            <div>
              <p class="contact-label">Email</p>
              <a href="mailto:${data.personal.email}" class="contact-value">${data.personal.email}</a>
            </div>
          </div>
        ` : ''}
        ${data.personal.phone ? `
          <div class="contact-item">
            <div class="contact-icon">${getLucideIcon('phone')}</div>
            <div>
              <p class="contact-label">Phone</p>
              <a href="tel:${data.personal.phone}" class="contact-value">${data.personal.phone}</a>
            </div>
          </div>
        ` : ''}
        ${data.personal.linkedin ? `
          <div class="contact-item">
            <div class="contact-icon">${getLucideIcon('linkedin')}</div>
            <div>
              <p class="contact-label">LinkedIn</p>
              <a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-value">Naveen Kumar G</a>
            </div>
          </div>
        ` : ''}
        ${data.personal.location ? `
          <div class="contact-item">
            <div class="contact-icon">${getLucideIcon('map-pin')}</div>
            <div>
              <p class="contact-label">Location</p>
              <span class="contact-value">${data.personal.location}</span>
            </div>
          </div>
        ` : ''}
      </div>

      <form class="contact-form" id="contact-form">
        <div class="form-group">
          <label class="form-label" for="contact-name">Your Name</label>
          <input type="text" id="contact-name" name="name" class="form-input" placeholder="John Doe" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="contact-email">Your Email</label>
          <input type="email" id="contact-email" name="email" class="form-input" placeholder="john@example.com" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="contact-message">Message</label>
          <textarea id="contact-message" name="message" class="form-textarea" placeholder="Hello, I'd like to connect..." required></textarea>
        </div>
        <button type="submit" class="btn-primary btn-submit">${getLucideIcon('send', 18)} Send Message</button>
      </form>
    `;

    // Setup contact form handler
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${data.personal.email}?subject=${subject}&body=${body}`;

        // Show success feedback
        const btn = form.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '✓ Opening Email Client...';
        btn.style.opacity = '0.7';
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.opacity = '1';
          form.reset();
        }, 3000);
      });
    }
  }

  // --- 12. renderFooter() ---
  function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer || !data.personal) return;

    const year = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer-links">
        ${data.personal.linkedin ? `<a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${getLucideIcon('linkedin')}</a>` : ''}
        ${data.personal.github ? `<a href="${data.personal.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${getLucideIcon('github')}</a>` : ''}
        ${data.personal.email ? `<a href="mailto:${data.personal.email}" aria-label="Email">${getLucideIcon('mail')}</a>` : ''}
      </div>
      <p class="footer-text">&copy; ${year} ${data.personal.name}. Built with passion for data.</p>
    `;
  }

  // --- THEME TOGGLE ---
  function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
      themeToggleBtn.innerHTML = theme === 'dark' ? getLucideIcon('sun') : getLucideIcon('moon');
    }
  }

  // --- MOBILE MENU ---
  function initMobileMenu() {
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (!menuToggleBtn || !navLinks) return;

    menuToggleBtn.innerHTML = getLucideIcon('menu');

    menuToggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isActive = navLinks.classList.contains('active');
      menuToggleBtn.innerHTML = isActive ? getLucideIcon('x') : getLucideIcon('menu');
    });

    // Close menu when a nav link is clicked
    navLinks.addEventListener('click', (e) => {
      if (e.target.closest('.nav-link')) {
        navLinks.classList.remove('active');
        menuToggleBtn.innerHTML = getLucideIcon('menu');
      }
    });
  }

  // --- SMOOTH SCROLL ---
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 64;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  // --- ACTIVE NAV LINK ---
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  // --- SCROLL ANIMATIONS ---
  function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Skill bar animations
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          if (width) {
            entry.target.style.width = width;
          }
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    skillBars.forEach(bar => skillObserver.observe(bar));
  }

  // --- SCROLL TO TOP BUTTON ---
  function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top';
    scrollTopBtn.innerHTML = getLucideIcon('arrow-up');
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');

    // Inline styles for the scroll-to-top button
    Object.assign(scrollTopBtn.style, {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      width: '44px',
      height: '44px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0',
      visibility: 'hidden',
      transition: 'all 0.3s ease',
      zIndex: '999',
      boxShadow: '0 4px 12px var(--shadow)'
    });

    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
      } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- INIT ---
  renderNavbar();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderAchievements();
  renderLanguages();
  renderContact();
  renderFooter();

  initThemeToggle();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initScrollAnimations();
  initScrollToTop();

});
