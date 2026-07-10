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
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let ventas = recuperarFloat("txtVentas");
    let precio = recuperarFloat("txtPrecio");

    let comision = calcularComision(ventas,precio);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal")

    spSueldoBase.textContent = sueldoBase; 
    spComision.textContent = comision;
    spTotal.textContent = total;
}