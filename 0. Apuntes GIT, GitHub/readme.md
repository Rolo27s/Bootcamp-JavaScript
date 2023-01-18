# Apuntes de GIT y GITHUB
## ¿Que es GIT?
Sistema de control de versiones
## ¿Que es GITHUB?
Plataforma de desarrollo colaborativo que usa GIT

## Comandos de GIT
* git clone "url" 	      //clona repositorio
* git status 		          //estado de archivos
* git status -s		        //estado de archivos pero solo la info minima (short)
* git add "name"		      //rastree o trackee datos. Si en name pones un punto, añades todo.
* git commit -m "mensaje"	//guarda archivos previamente trackeados
* git push		            //que los cambios guardados esten disponibles en remoto
* git pull		            //descargar cambios de parte del repositorio remoto (en lugar del repositorio completo)

## Otros comandos
* $ git --version           //enseña la ultima version de git instalada
* $ ls				              //muestra todas las carpetas (repositorios) dentro de la carpeta
* $ ls -la			            //muestra tambien los archivos ocultos
* $ cd "nombre de carpeta" 	//cd es change directory. Puedo usar tabulador para autocompletar.
* $ ssh-keygen -t rsa       //Accede al sistema de seguridad ssh y crea una llave (revisar concepto)

## Semántica en el control de versiones (SemVer)
Cada version de nuestro proyecto tendrá 3 dígitos
**"Mi_Proyecto"_vA.B.C**
Donde:
* A: versión MAYOR. Se realiza un cambio incompatible con versiones anteriores.
* B: versión MENOR. Se añaden funcionalidades complatibles con versiones anteriores.
* C: Versión PARCHE. Se reparan errores y es compatible con versiones anteriores.
<br>*Mas información en la pagina web [SemVer.org](https://semver.org/lang/es/)*
