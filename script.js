document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-item');
    const numbers = document.querySelectorAll('.number');
  
    const setActiveNumber = (index) => {
      numbers.forEach((number, i) => {
        if (i === index) {
          number.classList.add('active');
        } else {
          number.classList.remove('active');
        }
      });
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            setActiveNumber(index);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    // Add click functionality for smooth scrolling
    numbers.forEach((number, i) => {
      number.addEventListener('click', () => {
        sections[i].scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  