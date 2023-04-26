function abilitaBottone() {
    if (document.myform.txtNumeroRighe.value>0 &&document.myform.txtNumeroColonna.value>0 ) {
        document.myform.btnCreaTabella.disablad=false;
    } else
    document.myform.btnCreaTabella.disablad=true;
}
function creaTabella(numeroRiga,numeroColonna, divTabella) {
    let divTabellaObj=document.getElementById(divTabella);
    console.log("numero righe"+ numeroRiga);
    console.log("numero colonna"+numeroColonna);
    console.log(divTabellaObj);
    let htmlTableString='<table id="table" class="Invisible">'
    htmlTableString+='</table>';
    divTabellaObj.innerHTML=htmlTableString;
}
function tableHeader(numeroColonna) {
    let htmlString='<tr>'
    for (let i = 0; i < numeroColonna; i++) {
        htmlString+='<th> Header:'+i.toString()+'</th>'
    }
    htmlString+= '</tr>'
    return htmlString;

}
function tableRow(numeroColonna) {
    let htmlString='<tr>';
    for (let i = 0; i < numeroColonna; i++) {
        htmlString+='<td> cella:'+i.toString()+'</td>';
        
    }
    htmlString +='</th>';
 return htmlString;   

function cancellaTabella(divTabella) {
    let divTabellaObj=document.getElementById(divTabella);
    

}
}