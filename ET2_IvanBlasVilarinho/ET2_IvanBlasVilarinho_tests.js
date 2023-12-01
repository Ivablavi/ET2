def_test = Array(
    //campo id_programa
    Array('programa', 'id_programa', 1, 'Tamaño < 1', false, 'El campo no puede ser vacío'),
    Array('programa', 'id_programa', 2, 'Tamaño > 6', false, 'El tamaño debe ser de máximo 6'),
    Array('programa', 'id_programa', 3, 'No digitos', false, 'Solo puede contener digitos'),
    Array('programa', 'id_programa', 4, 'Tamaño entre 1 y 6 y solo dígitos', true, 'Éxito'),

    //campo nombre_programa
    Array('programa', 'nombre_programa', 5, 'Tamaño < 1', false, 'El campo no puede ser vacío'),
    Array('programa', 'nombre_programa', 6, 'Tamaño > 60', false, 'El tamaño debe ser de máximo 60'),
    Array('programa', 'nombre_programa', 7, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'), //duda inicial
    Array('programa', 'nombre_programa', 8, 'Tamaño entre 1 y 60 y alfabético o espacio en blanco', true, 'Éxito'),

    //campo acronimo_programa
    Array('programa', 'acronimo_programa', 9, 'Tamaño < 3', false, 'El tamaño debe ser de mínimo 3'),
    Array('programa', 'acronimo_programa', 10, 'Tamaño > 20', false, 'El tamaño debe ser de máximo 20'),
    Array('programa', 'acronimo_programa', 11, 'Tiene acentos o espacios en blanco', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('programa', 'acronimo_programa', 12, 'Tamaño entre 3 y 20 y alfabético sin acentos ni espacios en blanco',
        true, 'Éxito'),

    //campo nombre_original_programa
    Array('programa', 'nombre_original_programa', 13, 'Tamaño < 6', false, 'El tamaño debe ser de mínimo 6'),
    Array('programa', 'nombre_original_programa', 14, 'Tamaño > 60', false, 'El tamaño debe ser de máximo 60'),
    Array('programa', 'nombre_original_programa', 15, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('programa', 'nombre_original_programa', 16, 'Tamaño entre 6 y 60 y alfabético o espacios en blanco', true, 'Éxito'),

    //campo autor_programa
    Array('programa', 'autor_programa', 17, 'Tamaño < 6', false, 'El tamaño debe ser de mínimo 6'),
    Array('programa', 'autor_programa', 18, 'Tamaño > 50', false, 'El tamaño debe ser de máximo 50'),
    Array('programa', 'autor_programa', 19, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('programa', 'autor_programa', 20, 'Tamaño entre 6 y 50 y alfabético o espacio en blanco', true, 'Éxito'),

    //campo autor_original_programa
    Array('programa', 'autor_original_programa', 21, 'Tamaño < 6', false, 'El tamaño debe ser de mínimo 6'),
    Array('programa', 'autor_original_programa', 22, 'Tamaño > 50', false, 'El tamaño debe ser de máximo 50'),
    Array('programa', 'autor_original_programa', 23, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('programa', 'autor_original_programa', 24, 'Tamaño entre 6 y 50 y alfabético sin acentos o espacio en blanco', true, 'Éxito'),
    
    //campo ano_programa
    Array('programa','ano_programa', 25, 'Tamaño != 4', false, 'El tamaño debe ser de 4'),
    Array('programa','ano_programa', 26, 'Año superior al actual', false, 'El valor del año no debe ser superior al actual'),
    Array('programa','ano_programa', 27, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('programa','ano_programa', 28, 'Tamaño = 4, año no superior al actual y solo dígitos', true, 'Éxito'),

    //campo ano_original_programa
    Array('programa','ano_original_programa', 29, 'Tamaño != 4', false, 'El tamaño debe ser de 4'),
    Array('programa','ano_original_programa', 30, 'Año superior al actual', false, 'El valor del año no debe ser superior al actual'),
    Array('programa','ano_original_programa', 31, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('programa','ano_original_programa', 32, 'Tamaño = 4, año no superior al actual y solo dígitos', true, 'Éxito'),

    //campo requisitos_programa
    Array('programa','requisitos_programa', 33, 'Tamaño < 6', false, 'El tamaño debe ser de mínimo 6'),
    Array('programa','requisitos_programa', 34, 'Tamaño > 300', false, 'El tamaño debe ser de máximo 300'),
    Array('programa','requisitos_programa', 35, 'No alfabético ni espacio en blanco ni signo de puntuación',
        false, 'Solo puede contener caracteres alfabéticos, espacios en blanco y signos de puntuación'),
    Array('programa','requisitos_programa', 36, 'Tamaño entre 6 y 300 y es alfabético, signo de puntuación o espacio en blanco', true, 'Éxito'),

    //campo poblacion_desde_programa
    Array('programa','poblacion_desde_programa', 37, 'Tamaño < 1', false, 'El campo no puede ser vacío'),
    Array('programa','poblacion_desde_programa', 38, 'Tamaño > 2', false, 'El tamaño debe ser de máximo 2'),
    Array('programa','poblacion_desde_programa', 39, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('programa','poblacion_desde_programa', 40, 'Tamaño entre 1 y 2 y solo dígitos', true, 'Éxito'),

    //campo poblacion_hasta_programa
    Array('programa','poblacion_hasta_programa', 41, 'Tamaño < 1', false, 'El campo no puede ser vacío'),
    Array('programa','poblacion_hasta_programa', 42, 'Tamaño > 2', false, 'El tamaño debe ser de máximo 2'),
    Array('programa','poblacion_hasta_programa', 43, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('programa','poblacion_hasta_programa', 44, 'Tamaño entre 1 y 2 y solo dígitos', true, 'Éxito'),

    //campo unidad_poblacion
    Array('programa','unidad_poblacion', 45, 'Valores != de "MESES" o de "AÑOS"', false, 'Solo puede valer "MESES" o "AÑOS"'),
    Array('programa','unidad_poblacion', 46, 'Los valores son "MESES" o "AÑOS"', true, 'Éxito'),

    //campo tipo_programa
    Array('programa','tipo_programa', 47, 'Valores != "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"',
        false, 'Solo puede valer "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"'),
    Array('programa','tipo_programa', 48, 'Los valores son "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"', true, 'Éxito'),

    //campo tiempo_aplicacion_programa
    Array('programa','tiempo_aplicacion_programa', 49, 'Tamaño < 1', false, 'El campo no puede ser vacío'),
    Array('programa','tiempo_aplicacion_programa', 50, 'Tamaño > 4', false, 'El tamaño debe ser de máximo 4'),
    Array('programa','tiempo_aplicacion_programa', 51, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('programa','tiempo_aplicacion_programa', 52, 'Tamaño entre 1 y 4 y solo dígitos', true, 'Éxito'),

    //campo descrip_interp_programa
    Array('programa','descrip_interp_programa', 53, 'Tamaño < 100', false, 'El tamaño debe ser de mínimo 100'),
    Array('programa','descrip_interp_programa', 54, 'Tamaño > 5000', false, 'El tamaño debe ser de máximo 500'),
    Array('programa','descrip_interp_programa', 55, 'No alfabéticos ni espacios en blanco ni signos de puntuación',
        false, 'Solo puede contener caracteres alfabéticos, espacios en blanco o signos de puntuación'),
    Array('programa','descrip_interp_programa', 56, 'Tamaño entre 100 y 5000 y alfabético, espacio en blanco, signo de puntuación o "/r"', true, 'Èxito'),

    //campo fichero_programa
    Array('programa','fichero_programa', 57, 'Tamaño < 7', false, 'El tamaño debe ser de mínimo 7'),
    Array('programa','fichero_programa', 58, 'Tamaño > 60', false, 'El tamaño debe ser de máximo 60'),
    Array('programa','fichero_programa', 59, 'No alfabético', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('programa','fichero_programa', 60, 'Alfabéticos con acentos', false, 'No puede contener acentos'),
    Array('programa','fichero_programa', 61, 'La extensión no es .doc o .docx o .pdf', false, 'Sólo admite como extensiones .doc, .docx o .pdf'),
    Array('programa','fichero_programa', 62, 'Tamaño entre 7 y 60 y alfabético sin acentos', true, 'Éxito'),

    //campo enlace_programa
    Array('programa','enlace_programa', 63, 'Tamaño < 10', false, 'El tamaño debe ser de mínimo 10'),
    Array('programa','enlace_programa', 64, 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),
    Array('programa','enlace_programa', 65, 'Alfabético con acentos o espacios en blanco, o signos de puntuación != de ":", "/" o "."',
        false, 'Solo puede contener alfabéticos sin acentos y ":", "/" o "."'),
    Array('programa','enlace_programa', 66, 'Tamaño entre 10 y 100, alfabético sin acentos ni espacios en blanco y ":", "/" o "."', true, 'Éxito'),

    //campo formato_programa
    Array('programa','formato_programa', 67, 'Valores != "PAPEL", "ELECTRÓNICO", "PAPEL Y ELECTRÓNICO"',
        false, 'Solo puede valer "PAPEL", "ELECTRÓNICO", "PAPEL Y ELECTRÓNICO"'),
    Array('programa','formato_programa', 68, 'Los valores son "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', true, 'Éxito'),

    //campo modo_correccion_programa
    Array('programa','modo_correccion_programa', 69, 'Valores != "PAPEL", "ELECTRÓNICO", "PAPEL Y ELECTRÓNICO"',
        false, 'Solo puede valer "PAPEL", "ELECTRÓNICO", "PAPEL Y ELECTRÓNICO"'),
    Array('programa','modo_correccion_programa', 70, 'Los valores son "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', true, 'Éxito'),

    //campo modo_aplicacion_programa
    Array('programa','modo_aplicacion_programa', 71, 'Valores != "INDIVIDUAL", "COLECTIVO", "INDIVIDUAL Y COLECTIVO"',
        false, 'Solo puede valer "INDIVIDUAL", "COLECTIVO", "INDIVIDUAL Y COLECTIVO"'),
    Array('programa','modo_aplicacion_programa', 72, 'Los valores son "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO"', true, 'Éxito'),

    //campo imagen_programa
    Array('programa','imagen_programa', 73, 'Tamaño < 7', false, 'El tamaño debe ser de mínimo 7'),
    Array('programa','imagen_programa', 74, 'Tamaño > 60', false, 'El tamaño debe ser de máximo 60'),
    Array('programa','imagen_programa', 75, 'Contiene acentos o espacios en blanco', false, 'Solo puede contener alfabéticos sin acentos'),
    Array('programa', 'imagen_programa', 76, 'La extensión no es .jpg o .jpeg', false, 'Sólo admite como extensiones .jpg o .jpeg'),
    Array('programa','imagen_programa', 77, 'Alfabéticos sin acentos, tamaño entre 7 y 60 y es .jpg o .jpeg', true, 'Éxito'),


    //campo id_publicacion
    Array('publicacion', 'id_publicacion', 78, 'Tamaño < 1', false, 'El tamaño debe ser de mínimo 1'),
    Array('publicacion', 'id_publicacion', 79, 'Tamaño > 6', false, 'El tamaño debe ser de máximo 6'),
    Array('publicacion', 'id_publicacion', 80, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('publicacion', 'id_publicacion', 81, 'Tamaño entre 1 y 6 y solo dígitos', true, 'Éxito'),

    //campo titulo_publicacion
    Array('publicacion', 'titulo_publicacion', 82, 'Tamaño < 6', false, 'El tamaño debe ser de mínimo 6'),
    Array('publicacion', 'titulo_publicacion', 83, 'Tamaño > 80', false, 'El tamaño debe ser de máximo 80'),
    Array('publicacion', 'titulo_publicacion', 84, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('publicacion', 'titulo_publicacion', 85, 'Tamaño entre 6 y 80 y alfabético o espacio en blanco', true, 'Éxito'),

    //campo autor_publicacion
    Array('publicacion', 'autor_publicacion', 86, 'Tamaño < 6', false, 'El tamaño debe ser de mínimo 6'),
    Array('publicacion', 'autor_publicacion', 87, 'Tamaño > 40', false, 'El tamaño debe ser de máximo 40'),
    Array('publicacion', 'autor_publicacion', 88, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('publicacion', 'autor_publicacion', 89, 'Tamaño entre 6 y 40 y alfabético o espacio en blanco', true, 'Éxito'),

    //campo fecha_publicacion
    Array('publicacion', 'fecha_publicacion', 90, 'Formato != dd/mm/aaaa', false, 'El formato debe de ser dd/mm/aaaa'),
    Array('publicacion', 'fecha_publicacion', 91, 'Formato dd/mm/aaaa', true, 'Éxito'),

    //campo area_publicacion
    Array('publicacion', 'area_publicacion', 91, 'Tamaño < 1', false, 'El tamaño debe ser de mínimo 1'),
    Array('publicacion', 'area_publicacion', 92, 'Tamaño > 6', false, 'El tamaño debe ser de máximo 6'),
    Array('publicacion', 'area_publicacion', 93, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('publicacion', 'area_publicacion', 94, 'Tamaño entre 1 y 6 y solo dígitos', true, 'Éxito'),

    //campo texto_publicacion
    Array('publicacion', 'texto_publicacion', 95, 'Tamaño < 30', false, 'El tamaño debe ser de mínimo 30'),
    Array('publicacion', 'texto_publicacion', 96, 'Tamaño > 8000', false, 'El tamaño debe ser de máximo 8000'),
    Array('publicacion', 'texto_publicacion', 97, 'Carácteres no ASCII', false, 'Sólo puede contener carácteres ASCII'),
    Array('publicacion', 'texto_publicacion', 98, 'Tamaño entre 30 y 8000 y sólo carácteres ASCII', true, 'Éxito'),

    //campo imagen_publicacion
    Array('publicacion', 'imagen_publicacion', 99, 'Tamaño < 7', false, 'El tamaño debe ser de mínimo 7'),
    Array('publicacion', 'imagen_publicacion', 100, 'Tamaño > 50', false, 'El tamaño debe ser de máximo 50'),
    Array('publicacion', 'imagen_publicacion', 101, 'Contiene acentos o espacios en blanco', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('publicacion', 'imagen_publicacion', 102, 'La extensión no es .jpg o .jpeg', false, 'Sólo admite como extensiones .jpg o .jpeg'),
    Array('publicacion', 'imagen_publicacion', 103, 'Alfabéticos sin acentos, tamaño entre 7 y 50 y es .jpg o .jpeg', true, 'Éxito'),

)