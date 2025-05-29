const carrito = [];

const botones = document.querySelectorAll(".comprar");
const cantidadProductos = document.getElementById("cantidad");
const total = document.getElementById("total");

//Función para obtener precio
function obtenerPrecio(boton){
    const divProducto = boton.closest(".producto");
    const textoPrecio = divProducto.getElementsByClass("precio")[1].textContent;
    const precio = parseFloat(textoPrecio);
    return precio;
}

botones.forEach((boton)=>{
    boton.addEventListener("click", ()=> {
        const precio = obtenerPrecio(boton);
        carrito.push(precio);

        cantidadProductos.textContent = carrito.length;
        const total = carrito.reduce((acum,precio)=> acum + precio, 0);
        total.textContent = total.toFixed(2);
    })
});