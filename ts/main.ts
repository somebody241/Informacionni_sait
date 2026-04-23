document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector<HTMLElement>('nav');

  window.addEventListener('scroll', () => {
    if (!nav) return;

    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  const reveals = document.querySelectorAll<HTMLElement>('.reveal');

  const revealOnScroll = (): void => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  const starsContainer = document.querySelector<HTMLElement>('.stars');

  if (starsContainer) {
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const size: number = Math.random() * 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;

      starsContainer.appendChild(star);
    }
  }
});