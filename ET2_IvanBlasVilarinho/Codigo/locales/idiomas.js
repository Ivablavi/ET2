
function setLang(lang=''){

    let traduccion=textos_ES;
   
   //**Se recorre el array de traducciones buscando coincidencias una por una*/
   for(let clave in traduccion) {

 		let elementos = document.getElementsByClassName(clave);
        let etiquetas =document.getElementsByTagName('label');
        let inputs = document.getElementsByTagName('input');
        let imgs = document.getElementsByTagName('img');
        let options = document.getElementsByTagName('option');

        for (let elem in elementos) {
            elementos[elem].innerHTML = traduccion[clave];
        }

        for (let i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (let i = 0; i < inputs.length; i++) {
            let list = inputs[i].classList;
            for (let j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                    inputs[i].title = traduccion[clave];
                }            
            }
        }

        for (let i = 0; i < imgs.length; i++) {
            let list = imgs[i].classList;
            for (let j = 0; j < list.length; j++) {
                 if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave]; // texto alternativo si no se ve la imagen
                    imgs[i].title = traduccion[clave]; // texto superpuesto a la imagen al pasar sobre ella
                }
            } 
        } 

        for (let i = 0; i < options.length; i++) { 
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
	}
}
