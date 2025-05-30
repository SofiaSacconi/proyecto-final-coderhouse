const carrito = [];

const botones = document.querySelectorAll(".comprar");
const cantidadProductos = document.getElementById("cantidad");
const totalElemento = document.getElementById("total"); // Renombrado

//Función para obtener precio
function obtenerPrecio(boton){
    const divProducto = boton.closest(".producto");
    const textoPrecio = divProducto.querySelectorAll("p")[1].textContent;
    const precio = parseFloat(
        textoPrecio
            .replace("$", "")
            .replace(/\./, "")
            .replace(",", ".")
    );
    return isNaN(precio) ? 0 : precio;
}

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const precio = obtenerPrecio(boton);
        carrito.push(precio);

        cantidadProductos.textContent = carrito.length;

        const totalCarrito = carrito.reduce((acum, precio) => acum + precio, 0);
        totalElemento.textContent = totalCarrito.toLocaleString("es-AR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    });
});

function mostrarPanelFlotante() {
    const panel = document.getElementById("panel-flotante");
    panel.classList.add("mostrar");

    setTimeout(() => {
    panel.classList.remove("mostrar");
    }, 2000); 
};

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
    const precio = obtenerPrecio(boton);
    carrito.push(precio);

    cantidadProductos.textContent = carrito.length;

    const totalCarrito = carrito.reduce((acum, precio) => acum + precio, 0);
    totalElemento.textContent = totalCarrito.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    mostrarPanelFlotante(); //
    });
});
