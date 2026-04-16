function filterProjects(category, event) {
    // 1. Filtrar elementos
    const items = document.querySelectorAll('.project-item');
    items.forEach(item => {
        if (category === 'todos') {
            item.style.display = 'block';
        } else {
            item.classList.contains('cat-' + category) 
                ? item.style.display = 'block' 
                : item.style.display = 'none';
        }
    });

    // 2. Actualizar estilos del menú lateral
    const buttons = document.querySelectorAll('#product-filters .list-group-item');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Si el clic fue en el botón, le ponemos active
    event.currentTarget.classList.add('active');
}