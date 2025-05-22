
document.addEventListener('DOMContentLoaded', function() {
 
  document.getElementById('current-year').textContent = new Date().getFullYear();
  const menuButton = document.querySelector('.mobile-menu-button');
  const navigation = document.querySelector('.navigation');
  
  menuButton.addEventListener('click', function() {
    navigation.classList.toggle('active');
  });
 
  const starsContainer = document.querySelector('.stars-container');
  
  function createStars() {
    if (!starsContainer) return;
    
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      const size = Math.random() * 3 + 1;

      const delay = Math.random() * 5;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;
      star.style.animationDelay = `${delay}s`;
      
      starsContainer.appendChild(star);
    }
  }
  
  createStars();
  
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.querySelector('.close-modal');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const title = this.getAttribute('data-title');
      const description = this.getAttribute('data-description');
      
      modalImage.src = imgSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      
      modal.classList.add('active');
    });
  });
  
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      modal.classList.remove('active');
    });
  }
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  });
 
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
     
      setTimeout(function() {
  
        toast.classList.remove('hidden');
      
        setTimeout(function() {
          toast.classList.add('hidden');
        }, 3000);
        
        contactForm.reset();
      }, 500);
    });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });

      if (navigation.classList.contains('active')) {
        navigation.classList.remove('active');
      }
    });
  });
 
  function animateOnScroll() {
    const elements = document.querySelectorAll('.about, .featured-topics, .events, .gallery, .contact');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight * 0.85) {
        element.style.opacity = '1';
      }
    });
  }

  document.querySelectorAll('.about, .featured-topics, .events, .gallery, .contact').forEach(element => {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.6s ease-in';
  });
  

  window.addEventListener('scroll', animateOnScroll);

  animateOnScroll();
});
