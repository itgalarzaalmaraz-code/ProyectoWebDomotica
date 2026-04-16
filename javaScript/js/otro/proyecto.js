console.log("Archivo proyecto.js cargado correctamente");
function filterProjects(category, event) {
    console.log("Filtrando por:", category); // Para depuración

    // 1. Filtrar las tarjetas
    const items = document.querySelectorAll('.project-item');
    items.forEach(item => {
        if (category === 'todos') {
            item.style.display = 'block';
        } else if (item.classList.contains('cat-' + category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // 2. Cambiar la pestaña activa (Visual)
    // Buscamos todos los botones dentro del contenedor de filtros
    const buttons = event.target.closest('ul').querySelectorAll('.nav-link');
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Quitamos estilos manuales si los hubiera
        btn.style.backgroundColor = "";
        btn.style.color = "";
    });

    // Marcamos el botón clickeado
    event.target.classList.add('active');
}