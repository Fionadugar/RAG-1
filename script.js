function acceder() {
    const nombre = document.getElementById("nombre").value.trim();
    const datos = document.getElementById("datos").value.trim();

    if (nombre && datos) {
        window.location.href = "proyectos.html";
    } else {
        alert("Por favor, completa los campos.");
    }
}
document.querySelectorAll(".titulo-noticia").forEach(boton => {
    boton.addEventListener("click", () => {
        const contenido = boton.nextElementSibling;
        const activo = contenido.style.maxHeight;

        // Cerrar todos los abiertos primero
        document.querySelectorAll(".contenido-noticia").forEach(c => {
            c.style.maxHeight = null;
        });

        // Abrir si estaba cerrado
        if (!activo || activo === "0px") {
            contenido.style.maxHeight = contenido.scrollHeight + "px";
        }
    });
});

