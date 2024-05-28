function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    var dropdownBtn = document.querySelector(".dropdown-btn");
    var options = document.querySelectorAll(".dropdown-content p");

    if (dropdownContent.style.display === "block") {
        // Ocultar el menú desplegable
        dropdownContent.style.display = "none";
        // Iniciar la animación de cierre
        options.forEach((option, index) => {
            setTimeout(() => {
                option.style.opacity = 0;
                option.style.transform = "translateY(-20px)";
            }, 100 * (index + 1));
        });
    } else {
        // Mostrar el menú desplegable
        dropdownContent.style.display = "block";
        // Iniciar la animación de apertura
        options.forEach((option, index) => {
            setTimeout(() => {
                option.style.opacity = 1;
                option.style.transform = "translateY(0)";
            }, 100 * (index + 1));
        });
        // Desplazar suavemente hacia arriba solo hasta la palabra "Categorías"
        window.scrollTo({
            top: dropdownBtn.offsetTop - 50, // Ajusta este valor según sea necesario
            behavior: 'smooth'
        });
    }
}

function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    var dropdownBtn = document.querySelector(".dropdown-btn");
    var options = document.querySelectorAll(".dropdown-content p");

    if (dropdownContent.style.display === "block") {
        // Ocultar el menú desplegable
        dropdownContent.style.display = "none";
        // Detener la animación y hacer que el botón vuelva a vibrar
        dropdownBtn.classList.remove("clicked");
        dropdownBtn.style.animation = "vibrar 0.5s infinite alternate";
        // Iniciar la animación de cierre para las opciones
        options.forEach((option, index) => {
            setTimeout(() => {
                option.style.opacity = 0;
                option.style.transform = "translateY(-20px)";
            }, 100 * (index + 1));
        });
    } else {
        // Mostrar el menú desplegable
        dropdownContent.style.display = "block";
        // Detener la vibración y eliminar la animación cuando se abre el menú
        dropdownBtn.style.animation = "none";
        // Iniciar la animación de apertura para las opciones
        options.forEach((option, index) => {
            setTimeout(() => {
                option.style.opacity = 1;
                option.style.transform = "translateY(0)";
            }, 100 * (index + 1));
        });
        // Desplazar suavemente hacia arriba solo hasta la palabra "Categorías"
        window.scrollTo({
            top: dropdownBtn.offsetTop - 50, // Ajusta este valor según sea necesario
            behavior: 'smooth'
        });
    }
}






