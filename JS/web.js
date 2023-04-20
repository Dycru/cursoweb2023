// Obtener todos los enlaces de la página
const enlaces = document.getElementsByTagName('a');

// Agregar atributos de accesibilidad a cada enlace
for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].setAttribute('role', 'button');
  enlaces[i].setAttribute('tabindex', '0');
  enlaces[i].addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.click();
    }
  });
}
