let textos_ES = {

    // mensajes BACK
    // ---------------------------------
    'SQL_OK': '', // action realizada con exito
    'SQL_KO': '', // action falla en la operacion en la bd
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    'dni_es_nulo_KO': 'No se ha enviado el dni',
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'controlador_invalido': '', // no se envia la entidad
    'action_invalido': '', // no se envia la accion

    //entidad publicacion
    'id_publicacion': 'Codigo de publicacion',
    'titulo_publicacion': 'Titulo de publicacion',
    'autor_publicacion': 'Autor de publicacion',
    'fecha_publicacion': 'Fecha de publicacion',
    'area_publicacion': 'Area de publicacion',
    'texto_publicacion': 'Texto de publicacion',
    'imagen_publicacion': 'Imagen de publicacion',

    //labels atributos de entidad publicacion
    'label_id_publi': 'Introduzca codigo: ',
    'label_titulo_publi': 'Introduzca titulo: ',
    'label_autor_publi': 'Introduzca autor: ',
    'label_fecha_publi': 'Introduzca fecha: ',
    'label_area_publi': 'Introduzca area: ',
    'label_texto_publi': 'Introduzca texto: ',
    'label_imagen_publi': 'Introduzca imagen: ',
    'label_nuevo_imagen_publi':'Introduzca nueva imagen: ',

 
    //entidad programa
    'id_programa': 'Codigo de programa',
    'nombre_programa': 'Nombre de programa',
    'acronimo_programa': 'Acronimo de programa',
    'nombre_original_programa': 'Nombre original de programa',
    'autor_programa': 'Autor de programa',
    'autor_original_programa': 'Autor original de programa',
    'ano_programa': 'Ano de programa',
    'ano_original_programa': 'Ano original de programa',
    'requisitos_programa': 'Requisitos de programa',
    'poblacion_desde_programa': 'Poblacion desde programa',
    'poblacion_hasta_programa': 'Poblacion hasta programa',
    'unidad_poblacion': 'Unidad de poblacion',
    'tipo_programa': 'Tipo de programa',
    'tiempo_aplicacion_programa': 'Tiempo de aplicacion',
    'descrip_interp_programa': 'Descripcion de programa',
    'fichero_programa': 'Fichero de programa',
    'enlace_programa': 'Enlace de programa',
    'formato_programa': 'Formato de programa',
    'modo_correccion_programa': 'Modo de correccion',
    'modo_aplicacion_programa': 'Modo de aplicacion',
    'imagen_programa': 'Imagen de programa',

    //labels atributos de entidad programa
    'label_id_prog': 'Introduzca codigo: ',
    'label_nombre_prog': 'Introduzca nombre: ',
    'label_acronimo_prog': 'Introduzca acronimo: ',
    'label_nombre_original_prog': 'Introduzca nombre original: ',
    'label_autor_prog': 'Introduzca autor: ',
    'label_autor_original_prog': 'Introduzca autor original: ',
    'label_ano_prog': 'Introduzca ano: ',
    'label_ano_original_prog': 'Introduzca ano original: ',
    'label_requisitos_prog': 'Introduzca requisitos: ',
    'label_poblacion_desde_prog': 'Introduzca poblacion desde programa: ',
    'label_poblacion_hasta_prog': 'Introduzca poblacion hasta programa: ',
    'label_unidad_poblacion': 'Introduzca unidad de poblacion: ',
    'label_tipo_prog': 'Introduzca tipo: ',
    'label_tiempo_aplicacion_prog': 'Introduzca tiempo: ',
    'label_descrip_interp_prog': 'Introduzca descripcion: ',
    'label_fichero_prog': 'Introduzca fichero: ',
    'label_nuevo_fichero_prog':'Introduzca nuevo fichero',
    'label_enlace_prog': 'Introduzca enlace: ',
    'label_formato_prog': 'Introduzca formato: ',
    'label_modo_correccion_prog': 'Introduzca modo correccion: ',
    'label_modo_aplicacion_prog': 'Introduzca modo aplicacion: ',
    'label_imagen_prog': 'Introduzca imagen: ',
    'label_nuevo_imagen_prog':'Introduzca nueva imagen',

    //titulos paginas
    'titulo_tabla_publi': 'Tabla de publicaciones',
    'titulo_tabla_prog': 'Tabla de programas',

    //titulos formularios

    //entidad publicacion
    'titulo_form_ADD_publi': 'Insertar una publicacion',
    'titulo_form_EDIT_publi': 'Modificar una publicacion',
    'titulo_form_DELETE_publi': 'Eliminar una publicacion',
    'titulo_form_SEARCH_publi': 'Buscar una publicacion',
    'titulo_form_SHOWCURRENT_publi':'Ver detalles de una publicacion',

    //entidad programa
    'titulo_form_ADD_prog': 'Insertar un programa',
    'titulo_form_EDIT_prog': 'Modificar un programa',
    'titulo_form_DELETE_prog': 'Eliminar un programa',
    'titulo_form_SEARCH_prog': 'Buscar un programa',
    'titulo_form_SHOWCURRENT_prog':'Ver detalles de un programa',


    //mensajes formato en front

    //entidad publicacion
    //id_publicacion
    'KO_id_publi_min_size':'El tamaño debe ser de mínimo 1',
    'KO_id_publi_max_size':'El tamaño debe ser de máximo 6',
    'KO_id_publi_content':'Sólo puede contener dígitos',
    //titulo_publicacion
    'KO_titulo_publi_min_size':'El tamaño debe ser de mínimo 6',
    'KO_titulo_publi_max_size':'El tamaño debe ser de máximo 80',
    'KO_titulo_publi_content':'Sólo puede contener caracteres alfabéticos y espacios en blanco',
    //autor_publicacion
    'KO_autor_publi_min_size':'El tamaño debe ser de mínimo 6',
    'KO_autor_publi_max_size':'El tamaño debe ser de máximo 40',
    'KO_autor_publi_content':'Sólo puede contener caracteres alfabéticos y espacios en blanco',
    //fecha_publicacion
    'KO_fecha_publi_format':'El formato debe de ser dd/mm/aaaa',
    //area_publicacion
    'KO_area_publi_min_size':'El tamaño debe ser de mínimo 1',
    'KO_area_publi_max_size':'El tamaño debe ser de máximo 6',
    'KO_area_publi_content':'Sólo puede contener dígitos',
    //texto_publicacion
    'KO_texto_pubi_min_size':'El tamaño debe ser de mínimo 30',
    'KO_texto_pubi_max_size':'El tamaño debe ser de máximo 8000',
    'KO_texto_pubi_content':'Sólo puede contener carácteres ASCII',
    //imagen_publicacion
    'KO_imagen_publi_min_size':'El tamaño debe ser de mínimo 7',
    'KO_imagen_publi_max_size':'El tamaño debe ser de máximo 50',
    'KO_imagen_publi_content':'Sólo puede contener caracteres alfabéticos sin acentos',
    'KO_imagen_publi_extension':'Sólo admite como extensiones .jpg o .jpeg',
    //nuevo_imagen_publicacion
    'KO_nuevo_imagen_publi_min_size':'El tamaño debe ser de mínimo 7',
    'KO_nuevo_imagen_publi_max_size':'El tamaño debe ser de máximo 50',
    'KO_nuevo_imagen_publi_content':'Sólo puede contener caracteres alfabéticos sin acentos',
    'KO_nuevo_imagen_publi_extension':'Sólo admite como extensiones .jpg o .jpeg',

    //entidad programa
    //id_programa
    'KO_id_prog_min_size':'El campo no puede ser vacío',
    'KO_id_prog_max_size':'El tamaño debe ser de máximo 6',
    'KO_id_prog_content':'Sólo puede contener digitos',
    //nombre_programa
    'KO_nombre_prog_min_size':'El campo no puede ser vacío',
    'KO_nombre_prog_max_size':'El tamaño debe ser de máximo 60',
    'KO_nombre_prog_content':'Sólo puede contener caracteres alfabéticos y espacios en blanco',
    //acronimo_programa
    'KO_acronimo_prog_min_size':'El tamaño debe ser de mínimo 3',
    'KO_acronimo_prog_max_size':'El tamaño debe ser de máximo 20',
    'KO_acronimo_prog_content':'Sólo puede contener caracteres alfabéticos sin acentos',
    //nombre_original_programa
    'KO_nombre_original_prog_min_size':'El tamaño debe ser de mínimo 6',
    'KO_nombre_original_prog_max_size':'El tamaño debe ser de máximo 60',
    'KO_nombre_original_content':'Sólo puede contener caracteres alfabéticos y espacios en blanco',
    //autor_programa
    'KO_autor_prog_min_size':'El tamaño debe ser de mínimo 6',
    'KO_autor_prog_max_size':'El tamaño debe ser de máximo 50',
    'KO_autor_prog_content':'Sólo puede contener caracteres alfabéticos y espacios en blanco',
    //autor_original_programa
    'KO_autor_original_prog_min_size':'El tamaño debe ser de mínimo 6',
    'KO_autor_original_prog_max_size':'El tamaño debe ser de máximo 50',
    'KO_autor_original_prog_content':'Sólo puede contener caracteres alfabéticos y espacios en blanco',
    //ano_programa
    'KO_ano_prog_size':'El tamaño debe ser de 4',
    'KO_ano_prog_value':'El valor del año no debe ser superior al actual',
    'KO_ano_prog_content':'Sólo puede contener dígitos',
    //ano_original_programa
    'KO_ano_original_prog_size':'El tamaño debe ser de 4',
    'KO_ano_original_prog_value':'El valor del año no debe ser superior al actual',
    'KO_ano_original_prog_content':'Sólo puede contener dígitos',
    //requisitos_programa
    'KO_requisitos_prog_min_size':'El tamaño debe ser de mínimo 6',
    'KO_requisitos_prog_max_size':'El tamaño debe ser de máximo 300',
    'KO_requisitos_prog_content':'Sólo puede contener caracteres alfabéticos, espacios en blanco y signos de puntuación',
    //poblacion_desde_programa
    'KO_poblacion_desde_prog_min_size':'El campo no puede ser vacío',
    'KO_poblacion_desde_prog_max_size':'El tamaño debe ser de máximo 2',
    'KO_poblacion_desde_prog_content':'Sólo puede contener dígitos',
    //poblacion_hasta_programa
    'KO_poblacion_hasta_prog_min_size':'El campo no puede ser vacío',
    'KO_poblacion_hasta_prog_max_size':'El tamaño debe ser de máximo 2',
    'KO_poblacion_hasta_prog_content':'Sólo puede contener dígitos',
    //unidad_poblacion
    'KO_unidad_poblacion_value':'Sólo puede valer "MESES" o "AÑOS"',
    //tipo_programa
    'KO_tipo_programa_value':'Sólo puede valer "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"',
    //tiempo_aplicacion_programa
    'KO_tiempo_aplicacion_prog_min_size':'El campo no puede ser vacío',
    'KO_tiempo_aplicacion_prog_max_size':'El tamaño debe ser de máximo 4',
    'KO_tiempo_aplicacion_content':'Sólo puede contener dígitos',
    //descrip_interp_programa
    'KO_descrip_interp_prog_min_size':'El tamaño debe ser de mínimo 100',
    'KO_descrip_interp_prog_max_size':'El tamaño debe ser de máximo 5000',
    'KO_descrip_interp_prog_content':'Sólo puede contener caracteres alfabéticos, espacios en blanco o signos de puntuación',
    //fichero_programa
    'KO_fichero_prog_min_size':'El tamaño debe ser de mínimo 7',
    'KO_fichero_prog_max_size':'El tamaño debe ser de máximo 60',
    'KO_fichero_prog_content':'Sólo puede contener caracteres alfabéticos sin acentos',
    'KO_fichero_prog_extension':'Sólo admite como extensiones .doc, .docx o .pdf',
    //nuevo_fichero_programa
    'KO_nuevo_fichero_prog_min_size':'El tamaño debe ser de mínimo 7',
    'KO_nuevo_fichero_prog_max_size':'El tamaño debe ser de máximo 60',
    'KO_nuevo_fichero_prog_content':'Sólo puede contener caracteres alfabéticos sin acentos',
    'KO_nuevo_fichero_prog_extension':'Sólo admite como extensiones .doc, .docx o .pdf',
    //enlace_programa
    'KO_enlace_prog_min_size':'El tamaño debe ser de mínimo 10',
    'KO_enlace_prog_max_size':'El tamaño debe ser de máximo 100',
    'KO_enlace_prog_content':'Sólo puede contener alfabéticos sin acentos y ":", "/" o "/"',
    //modo_correccion_programa
    'KO_modo_correcion_prog_value':'Sólo puede valer "PAPEL", "ELECTRÓNICO", "PAPEL Y ELECTRÓNICO"',
    //modo_aplicacion_programa
    'KO_modo_aplicacion_prog_value':'Sólo puede valer "PAPEL", "ELECTRÓNICO", "PAPEL Y ELECTRÓNICO"',
    //imagen_programa
    'KO_imagen_prog_min_size':'El tamaño debe ser de mínimo 7',
    'KO_imagen_prog_max_size':'El tamaño debe ser de máximo 60',
    'KO_imagen_prog_content':'Sólo puede contener alfabéticos sin acentos',
    'KO_imagen_prog_extension':'Sólo son válidas las extensiones .jpg y .jpeg',
    //nuevo_imagen_programa
    'KO_nuevo_imagen_prog_min_size':'El tamaño debe ser de mínimo 7',
    'KO_nuevo_imagen_prog_max_size':'El tamaño debe ser de máximo 60',
    'KO_nuevo_imagen_prog_content':'Sólo puede contener alfabéticos sin acentos',
    'KO_nuevo_imagen_prog_extension':'Sólo admite como extensiones .jpg o .jpeg',


};

