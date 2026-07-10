function recuperarTxt(idCmp) {
    let cmp = document.getElementById(idCmp);
    let valor = cmp.value;
    return valor;
}

function recuperarFloat(idCmp){
    let valorFloat = parseFloat(recuperarTxt(idCmp)); 
    return valorFloat;
}