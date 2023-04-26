function scriviTAG() {
    let div = document.getElementById("idTAG");
    //genera tag da stringa=innerhtml
    let strListaTAG = generaTAG('img','foto1.jpg','idfoto1','immagine','img/foto1.jpg');
    strListaTAG += generaTAG('img','foto2.jpg','','immagine','img/foto2.jpg');
    div.innerHTML = strListaTAG;
    // genera tag da obj = appenChild()
    let elementoCreato=generaTAGOBJ('img','foto1.jpg','idfoto1','immagine','img/foto1.jpg')
    div.appendChild(elementoCreato)
}   
function generaTAGOBJ(tag,innerText,id,classe,url) {
    //let strTAG ="";
    let elemento= null;
    let lowerTAG = tag.toLowerCase();
   switch (lowerTAG) {
    case 'p': 
    case 'h1': 
    case 'h3': 
    case 'span':
        elemento=document.createElement(lowerTAG);
        console.log(elemento);
        break
    case 'a':
    case 'img':

    console.log(strTAG);
    break;
    return elemento;                           
///////
default:
    break;
} 
    
}
function generaTAG(tag,innerText,id,classe,url) {
   let strTAG ="";
   let lowerTAG = tag.toLowerCase();
   switch (lowerTAG) {
    case 'p': 
    case 'h1': 
    case 'h3': 
    case 'span':
        strTAG += '<' + lowerTAG + ' id="'+ id + '" class="'+ classe + '"' + '>' 
        strTAG += innerText;
        strTAG += '</' + lowerTAG + '>';
        console.log(strTAG);
        break;
    case 'a':
    strTAG += '<' + lowerTAG + ' href="' + url + '"' + ' id="'+ id + '" class="'+ classe + '"' + '>'
        strTAG += innerText;
        strTAG += '</' + lowerTAG + '>';
        console.log(strTAG);
        break;    
    case 'img':
        let proprId = '';
        if(id != '')
        proprId += 'id="' + id +'"';
    strTAG += '<' + lowerTAG + ' src="' + url + '" ' + proprId + ' class="'+ classe + '"' + ' alt="' + innerText + '"' +'/>'
    console.log(strTAG);
    break;                           
default:
    break;
} 
return strTAG;
}
function insertPElement(){
    //let element =document.createElement('p');
    
    let testo =document.createTextNode('ciao');
    divNode=document.getElementById("idInsertPElement");
    divNode.appendchild(testo);
}