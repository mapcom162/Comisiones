const VENTAS_BASE = 5;

function calcularComision(numVentas, precioProducto) {
    let comision = 0;
    if (numVentas > VENTAS_BASE) {
        let ventasExtras = numVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.1);
    }
    return comision;
}

function actualizarBoton() {

    const campos = [
        document.getElementById("txtSueldoBase"),
        document.getElementById("txtVentas"),
        document.getElementById("txtPrecio")
    ];

    let valido = true;

    for (let campo of campos) {

        const valor = campo.value.trim();

        if (
            valor === "" ||
            !/^\d+$/.test(valor) ||
            valor.length > 5
        ) {
            valido = false;
            break;
        }
    }

    document.getElementById("btnCalcular").disabled = !valido;
}

function validarCampo(input) {
    const valor = input.value.trim();
    const error = document.getElementById("error" + input.id.charAt(0).toUpperCase() + input.id.slice(1));

    error.textContent = "";

    if (valor === "") {
        error.textContent = "El campo no puede estar vacío.";
        actualizarBoton();
        return false;
    }

    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números.";
        actualizarBoton();
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos.";
        actualizarBoton();
        return false;
    }

    actualizarBoton();
    return true;
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

    if (
        !validarCampo(document.getElementById("txtSueldoBase")) ||
        !validarCampo(document.getElementById("txtVentas")) ||
        !validarCampo(document.getElementById("txtPrecio"))
    ) {
        return;
    }

    spSueldoBase.textContent = sueldoBase; 
    spComision.textContent = comision;
    spTotal.textContent = total;
}