function paginaIniziale() {
    let strPaginaIniziale='<label for="righe">Numero di righe </label>';
    strPaginaIniziale +='</br>';
    strPaginaIniziale+='<input type="number" name="numro righe" id="idNumeroRighe"  onchange="validaTabella()">';
    strPaginaIniziale +='</br>';
    strPaginaIniziale+='<label for="colonne">Numero di colonne </label>';
    strPaginaIniziale +='</br>';
    strPaginaIniziale +='<input type="number" name="numro colonne" id="idNumeroColonne" onchange="validaTabella()">';
    strPaginaIniziale +='</br>';
    strPaginaIniziale +='<input type="button" value="Genera tabella" id="idGeneraTabella"  onclick="generaTabella()"disabled >';
    document.getElementById("mainContent").innerHTML = strPaginaIniziale;
}
function validaTabella(){
    console.log("validaTabella");
    let numeroRiga = document.getElementById("idNumeroRighe");
    let numeroColonna = document.getElementById("idNumeroColonne");
    let btnGeneraTabella= document.getElementById("idGeneraTabella");
    if (numeroRiga.value >0 & numeroColonna.value >0) 
        btnGeneraTabella.disabled = false;
    else
        btnGeneraTabella.disabled = true;
}

function generaTabella() {
   
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let colonne = document.getElementById("idNumeroColonne").value;
    let righe = document.getElementById("idNumeroRighe").value;
    console.log(colonne);
    console.log(righe);

        for (let i = 0; i < righe; i++) {

            const row = document.createElement("tr");
               
            for (let j = 0; j < colonne; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode("Celle");
            cell.appendChild(cellText);
            row.appendChild(cell);
            }
                


            tblBody.appendChild(row);
                
            }
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "10");
}
