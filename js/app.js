const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const presentacion = document.querySelector(".seccion-presentacion");
    const imagen = document.querySelector(".presentacion");
    const texto = document.querySelector(".text-presentacion");

    if (presentacion) {
      presentacion.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
    if (imagen) {
      imagen.style.transform = `translateX(${scrollY * 0.1}px)`;
    }
    if (texto) {
      texto.style.transform = `translateY(${scrollY * 0.08}px)`;
    }
  });

  window.addEventListener('scroll', () => {
    const contenido = document.querySelector('.contenido-sobremi');
    const position = contenido.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.85;
  
    if (position < screenPosition) {
      contenido.classList.add('visible');
    }
  });

  const proyectos = document.querySelectorAll('.tarjeta-proyecto');

  const mostrarProyectos = () => {
    proyectos.forEach(proyecto => {
      const rect = proyecto.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        proyecto.classList.add('mostrar');
      }
    });
  };

  window.addEventListener('scroll', mostrarProyectos);
  window.addEventListener('load', mostrarProyectos);



  // Mostrar formulario al hacer clic en el botón "Contactar"
  document.getElementById('btn-contacto').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
});

// Enviar el formulario a través de Gmail al hacer submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Recoger los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crear el enlace de Gmail con los parámetros predefinidos
    const subject = encodeURIComponent("Mensaje de " + name);
    const body = encodeURIComponent("Nombre: " + name + "\nEmail: " + email + "\n\n" + message);
    const mailtoLink = `mailto:enzojatip@gmail.com?subject=${subject}&body=${body}`;

    // Abrir el cliente de correo Gmail con los datos del formulario
    window.location.href = mailtoLink;

    // Ocultar el formulario después de enviar
    document.getElementById('form-container').style.display = 'none';
});