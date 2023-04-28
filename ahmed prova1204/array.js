// function abilitaBtn() {
//     if (document.getElementById(txtNumero.value)!=""  ) {
//         document.getElementById( btnPosizione.disablad)=false;
//     } else
//         document.getElementById (btnPosizione.disablad)=true;}

function creaArray() {
    let arrayN= [];
    let lenght= 100;
    
    for (let i = 0; i < lenght; i++) {
        
        let num=(Math.random()*lenght);
        var numIntero=Math.round(num);
        arrayN.push(numIntero)
    }
    console.log(arrayN);
    return arrayN
}