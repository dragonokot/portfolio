import './style.css';
import { translations } from './translations.js';

let currentLang = 'ru';
let typewriterTimeout = null;

const getEl = (id) => {
  const el = document.getElementById(id);
  return el;
};

const elements = {
  name: getEl('hero-name'),
  title: getEl('hero-title'),
  arsenalTitle: getEl('arsenal-title'),
  arsenalGrid: getEl('arsenal-grid'),
  aboutTitle: getEl('about-title'),
  aboutText: getEl('about-text'),
  expTitle: getEl('exp-title'),
  skillsTitle: getEl('skills-title'),
  eduTitle: getEl('edu-title'),
  contactTitle: getEl('contact-title'),
  labelLoc: getEl('label-loc'),
  valLoc: getEl('val-loc'),
  langButtons: document.querySelectorAll('.btn-lang'),
  timeline: getEl('timeline'),
  skillsGrid: getEl('skills-grid'),
  eduList: getEl('edu-list'),
  slides: document.querySelectorAll('.hero-slideshow img')
};

// --- Typewriter Effect ---
function typeWriter(text, element, speed = 50) {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  element.innerHTML = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
      i++;
      typewriterTimeout = setTimeout(type, speed);
    } else {
      element.innerHTML = text;
    }
  }
  type();
}

// --- Slideshow Logic ---
let currentSlide = 0;
function initSlideshow() {
  if (elements.slides.length <= 1) return;
  
  setInterval(() => {
    elements.slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % elements.slides.length;
    elements.slides[currentSlide].classList.add('active');
  }, 5000);
}

// --- Rendering ---
function render() {
  const t = translations[currentLang];
  if (!t) return;

  // Active Button Highlight
  elements.langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Basic Text
  if (elements.name) typeWriter(t.name, elements.name, 100);
  if (elements.title) elements.title.textContent = t.title;
  if (elements.arsenalTitle) elements.arsenalTitle.textContent = t.arsenal_title;
  if (elements.aboutTitle) elements.aboutTitle.textContent = t.about_title;
  if (elements.aboutText) elements.aboutText.textContent = t.about_text;
  if (elements.expTitle) elements.expTitle.textContent = t.experience_title;
  if (elements.skillsTitle) elements.skillsTitle.textContent = t.skills_title;
  if (elements.eduTitle) elements.eduTitle.textContent = t.education_title;
  if (elements.contactTitle) elements.contactTitle.textContent = t.contact_title;
  
  const labels = {
    ru: { loc: "Местоположение:" },
    en: { loc: "Location:" },
    kz: { loc: "Орналасқан жері:" }
  };

  if (elements.labelLoc) elements.labelLoc.textContent = labels[currentLang].loc;
  if (elements.valLoc) elements.valLoc.textContent = t.location;

  // Arsenal Grid
  if (elements.arsenalGrid) {
    elements.arsenalGrid.innerHTML = t.arsenal.map(item => {
      const isFeature = (item.title === "Information Systems" || item.title === "Инфо-системы" || item.title === "Ақпараттық жүйелер");
      return `
        <div class="tech-icon-card glass-card ${isFeature ? 'hidden-feature' : ''}" 
             ${isFeature ? 'onclick="window.open(\'https://ru.dotabuff.com/players/29640714\', \'_blank\')"' : ''}>
          ${item.icon}
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;
    }).join('');
  }

  // Timeline
  if (elements.timeline) {
    elements.timeline.innerHTML = t.jobs.map(job => `
      <div class="timeline-item">
        <h3>${job.role}</h3>
        <div class="company">${job.company}</div>
        <div class="period">${job.period}</div>
        <p>${job.description}</p>
      </div>
    `).join('');
  }

  // Skills
  if (elements.skillsGrid) {
    elements.skillsGrid.innerHTML = t.skills.map(skill => `
      <div class="skill-tag">${skill}</div>
    `).join('');
  }

  // Education
  if (elements.eduList) {
    elements.eduList.innerHTML = t.education.map(edu => `
      <div class="glass-card" style="margin-bottom: 20px;">
        <h3>${edu.degree}</h3>
        <div class="company">${edu.school}</div>
        <div class="period">${edu.year}</div>
      </div>
    `).join('');
  }
}

// Language Selector Logic
elements.langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (lang !== currentLang) {
      currentLang = lang;
      render();
    }
  });
});

// Scroll Reveal Observer
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => observer.observe(section));

// --- Startup ---
initSlideshow();
render();
