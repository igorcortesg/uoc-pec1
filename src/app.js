import lottie from 'lottie-web';

lottie.loadAnimation({
  container: document.getElementById('animacion'), // El contenedor HTML para la animación
  path: 'assets/animations/Animation.json', // Ruta a la animación
  renderer: 'svg', // Renderizador de la animación (puede ser 'svg', 'canvas' o 'html')
  loop: true, // Hacer que la animación se repita
  autoplay: true, // Iniciar la animación al cargar la página
});
