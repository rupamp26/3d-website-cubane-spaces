import { gsap } from 'gsap';

export const initAnimations = () => {
  // Hero text animation
  gsap.fromTo('.hero-text', 
    { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    { 
      opacity: 1, 
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.5
    }
  );

  // Subtitle animation
  gsap.fromTo('.hero-content h2', 
    { 
      opacity: 0, 
      x: -50 
    },
    { 
      opacity: 1, 
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 1
    }
  );

  // Tagline animation
  gsap.fromTo('.hero-content p', 
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 1.3,
      stagger: 0.2
    }
  );

  // Navigation animation
  gsap.fromTo('.nav-container', 
    { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    { 
      opacity: 1, 
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 1.5
    }
  );

  // Header animation
  gsap.fromTo('header', 
    { 
      opacity: 0, 
      y: -30 
    },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.3
    }
  );

  // 3D Canvas entrance
  gsap.fromTo('canvas', 
    { 
      opacity: 0, 
      scale: 0.5,
      rotationY: 45
    },
    { 
      opacity: 1, 
      scale: 1,
      rotationY: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.8
    }
  );

  // Scroll indicator animation
  gsap.to('.scroll-indicator', {
    opacity: 0.5,
    y: 10,
    duration: 1.5,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    delay: 2
  });

  // Button hover animations
  document.querySelectorAll('.button-glow').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Navigation item animations
  document.querySelectorAll('.nav-item').forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });

  // Background grid animation
  gsap.to('.grid-pattern', {
    opacity: 0.3,
    duration: 2,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
  });
};