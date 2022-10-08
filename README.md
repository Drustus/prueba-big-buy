# Explicación de la prueba

Esta prueba consiste en añadir movimientos y realizar la operación correspondiente. En primer lugar hay que tener en cuenta que seguramente los datos estarán en su formato de moneda más pequeña, ya que por internacionalización no todas las monedas funcionan con la misma cantidad de decimales. Lo he dividido entre 100 para nuestro formato.

En el desarrollo he intentado aplicar patrones de React (HOC, render props, compound, etc) para mostrar dichas características aunque a veces quedara de manera forzada. La arquitectura del proyecto es simple y no he simulado un repositorio para obtener los datos, cargándolos directamente del JSON.

Además de un test de cada tipo he añadido tests E2E con cypress.

# Arrancar la prueba

Para arrancar el proyecto se necesita node y npm o yarn instalado, pero seguro que no hay problema ;)

Comandos usuales para trabajar:

- `yarn` para instalar
- `yarn start` para arrancar la aplicación
- `yarn cypress open` para inicializar cypress y lanzar sus tests

# Dificultades

Una de las mayores dificultades ha sido adaptar el diseño para un formato móvil.

También ha sido especialmente tedioso realizar el paginado, teniendo en cuenta el número de elementos por página, el desplazamiento de la ventana del propio paginado, etc.

Otra dificultad era añadir el filtrado de rango de fechas al diseño. He obtado por poner un filtro en esa columna que te permite poner fechas y filtrar por el rango. En cuanto al filtrado por tipo de operación la he incluido en el input buscador. Sobre este input, he optado por quitar el botón de Filtrar, ya que he hecho un filtro dinámico en el que se va filtrando mientras escribes. Esta decisión podría tener problemas si la carga de datos es muy alta y habría que utilizar algún patrón como useDefferedValue para evitar el bloqueo de interfaz. Con esta decisión tampoco se podría filtrar por varios campos.

# Mejoras aportadas

Como parte de mejora se ha cambiado el botón de filtrar para que sea una búsqueda dinámica, aportando rapidez al usuario y evitando clics. En el formulario para realizar una operación se ha añadido un texto que indica el resultado que va a tener la operación según la cantidad.

Quedarían multitud de mejoras que se podrían añadir: mejor validación de formulario, feedback al usuario cuando realice una operación, más tipos de filtrados en las columnas (filtrar movimiento con operadores, por ejemplo), mejorar el diseño, i18n de textos y monedas.
