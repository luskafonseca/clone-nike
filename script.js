<script>
  // Ativa/desativa menu responsivo
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Hero Carrossel (caso exista)
  const slides = document.querySelectorAll('#hero-carousel .slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // Carrossel de produtos
  function scrollCarousel(direction) {
    const carousel = document.getElementById('produtos-carousel');
    if (!carousel) return;
    
    const cardWidth = carousel.querySelector('.produto-card')?.offsetWidth || 200;
    const margin = 16; // gap de 1rem ~16px
    const scrollAmount = (cardWidth + margin) * 3;

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
</script>
