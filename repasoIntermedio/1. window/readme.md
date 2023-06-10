Introducción a Window
Hereda las propiedades de EventTarget

- open() - carga un recurso en el contexto de un nuevo navegador o uno que ya existe.
- close() - cierra la ventana actual, o la ventana en la que se llamó.
- closed - indica si la ventana referenciada está cerrada o no.
- name - obtiene establece el nombre del contexto de exploración de la ventana.
- stop() - detiene la carga de recursos en el contexto de navegación actual.
- alert() - muestra un cuadro de alerta con el contenido especificado y un botón Aceptar. 
- print() - Abre el cuadro de diálogo Imprimir para imprimir el documento actual. 
- prompt() - Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (String) 
- confirm() - Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar.

- screen - devuelve una referencia al objeto de pantalla asociado con la ventana.
- screenLeft - devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla 
- screenTop devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla
- scrollx - devuelve el número de píxeles que el documento se desplaza actualmente horizontalmente.
- scrolly - devuelve el número de píxeles que el documento se desplaza actualmente verticalmente.
- scroll() - desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)

- resizeBy() - cambia el tamaño de la ventana actual en una cantidad específica. relativo.
- resizeTo() - redimensiona dinámicamente la ventana. absoluto.
- moveBy() - Mueve la ventana en una ubicación relativa.
- moveTo() - Mueve la ventana en una ubicación absoluta.

- objetos barprop
    - locationbar
    - menubar
    - personalbar 
    - scrollbars
    - statusbar
    - toolbar
    * Tienen la propiedad visible. Devuelve true or false si es o no visible

<!-- LOCATION -->

- window.location.protocol - (devuelve el protocolo web utilizado (http: o https :))
- window.location.hostname - (devuelve el nombre de dominio del servidor web)
- window.location.pathname - (devuelve la ruta y el nombre de archivo de la página actual. Es relativo al origen)

- window.location.href - (devuelve el href (URL) de la página actual. Es la suma ordenada de los 3 anteriores)

- window.location.assign() - (carga un nuevo documento)