const VENTAS_BASE = 5;

function calcularComision(numVentas, precioProducto) {
    let comision = 0;
    if (numVentas > VENTAS_BASE) {
        let ventasExtras = numVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.1);
    }
    return comision;
}

function calcular(){
    let cmpSueldoBase = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");

    let sueldoBase = parseFloat(cmpSueldoBase.value);
    let ventas = parseFloat(cmpVentas.value);
    let precio = parseFloat(cmpPrecio.value);

    let comision = calcularComision(ventas,precio);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal")

    spSueldoBase.textContent = sueldoBase; 
    spComision.textContent = comision;
    spTotal.textContent = total;
}