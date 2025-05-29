const carrito = [];

const botones = document.querySelectorAll(".comprar");
const cantidadProductos = document.getElementById("cantidad");
const total = document.getElementById("total");

//Función para obtener precio
function obtenerPrecio(boton){
    const divProducto = boton.closest(".producto");
    const textoPrecio = divProducto.querySelectorAll("p")[1].textContent;
    const precio = parseFloat(
    textoPrecio
      .replace("$", "")       // Quita el símbolo $
      .replace(/\./g, "")     // Quita los puntos (miles)
      .replace(",", ".")      // Cambia la coma por punto
    );
    return isNaN(precio) ? 0 : precio; // Fallback si falla
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