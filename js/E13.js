function agregaLinea(){
    var oTb = document.getElementById("tb1Uno");
    var oLin = oTbl.insertRow(-1);
    var oCelda1 = oLin.insertCell(0);
    var oCelda2 = oLin.insertCell(1);
    var oCelda2 = oLin.insertCell(2);

    oCelda1.innerHTML = "Celda";
    oCelda2.innerHTML = 'Texto y campo '+'<input type="text" name="campo"/>';
    oCelda3.innerHTML = "agregado_"
}

function eliminaLinea(){
    var oTbl = document.getElementById("tblUno");
    oTbl.deleteRow(-1);
}