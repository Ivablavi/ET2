class validacionesatomicas{

    constructor(){

    }


    static check_min_size(id_elem, min_size){
        if(document.getElementById(id_elem).value.length < min_size){
            return false;
        }
        else{
            return true;
        }
    }

    static check_max_size(id_elem, max_size){
        if(document.getElementById(id_elem).value.length > max_size){
            return false;
        }
        else{
            return true;
        }
    }
 
    //solo digitos
    static check_just_nums(id_elem){
        const content = document.getElementById(id_elem).value;
        let regex = /^[0-9]*$/;

        return regex.test(content);
    }  

    //alfabeticos con acentos y espacios
    static check_just_letters_accents(id_elem){
        const content = document.getElementById(id_elem).value;
        let regex = /^[a-zA-Z-áÁeÉíÍóÓúÚñÑ\s]*$/;

        return regex.test(content);
    }

    //alfabeticos con espacios
    static check_just_letters_spaces(id_elem){
        const content = document.getElementById(id_elem).value;
        let regex = /^[a-zA-Z\s]*$/;

        return regex.test(content);

    }

    //alfabeticos sin acentos ni espacios
    static check_just_letters(id_elem){
        let regex = /^[a-zA-Z]*$/;
        const content = document.getElementById(id_elem).value;
        if (id_elem == 'imagen_programa' || id_elem == 'nuevo_imagen_programa' || id_elem == 'fichero_programa'
            || id_elem == 'nuevo_fichero_programa' || id_elem == 'imagen_publicacion' || id_elem == 'nuevo_imagen_publicacion'){
            
            let name = content.files[0].name;
            let aux = name.replace(/\.[^/.]+$/, '');
            return regex.test(aux);
        }
        
        return regex.test(content);
    }

    static check_enum(id_elem, aux_enum){
        const content = document.getElementById(id_elem).value;
        const vals_aux_enum = Object.values(aux_enum);

        return vals_aux_enum.includes(content);

    }
    
    static check_no_nums(id_elem){
        const content = document.getElementById(id_elem).value;
        let regex = /^[0-9]*$/
        return !regex.test(content);
    }

    static check_year_under_actual_date(id_elem){
        const fechaInput = document.getElementById(id_elem);
    
        const fechaObjeto = new Date(fechaInput.value);
        const actualYear = new Date().getFullYear();
    
        return fechaObjeto.getFullYear() <= actualYear;
    }

    static check_year_under_actual(id_elem){
        const content = document.getElementById(id_elem).value;
        const actual = 2023;

        return content <= actual;
    }

    //solo ASCII
    static check_just_ASCII(id_elem){
        const content = document.getElementById(id_elem).value;
        let regex = /(^[\x20-\x7E]*$)/;

        return regex.test(content);
    }

    static check_just_letters_spaces_signs(id_elem){
        const content = document.getElementById(id_elem).value;
        let regex = /^[a-zA-Z\s.,;:'"()\-]*$/;

        return regex.test(content);

    }

    static check_just_letters_link(id_elem) {
        const content = document.getElementById(id_elem).value;
        let regex = /^[a-zA-Z:/.\s]*$/;
    
        return regex.test(content);
    }

    static check_extension_imagen(id_elem){
        let extensions_ok = ['jpeg', 'jpg'];
        let element = document.getElementById(id_elem);
        let name = element.files[0].name;
        let extension = name.split('.').pop();

        return (extensions_ok.includes(extension));
    }

    static check_extension_fichero(id_elem){
        let extensions_ok = ['pdf', 'doc', 'docx'];
        let element = document.getElementById(id_elem);
        let name = element.files[0].name;
        let extension = name.split('.').pop();

        return (extensions_ok.includes(extension));
    }

}