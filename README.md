# Carrera-FrontEnd

**Carrera FrontEnd Wmedia - Jorge Mendieta.**

⏳🖱💻Curso de desarrollo web completo y desde cero.⏳🖱💻

**HTML**, **CSS**, **JavaScript**, **Git & Github**

![Carrera FrontEnd](img/frontend.jpg)

## Temas Estudiados.

1. [HTML](#html)
2. [CSS](#css)
3. [JavaScript](#js)

---

<div id="html"/>

**1. Introducción al desarrollo web.**

- **HTML.**
  Lista de etiquetas que veremos en esta sección.

  - Encabezados(h1, h2,...h6).
  - Párrafos(p).
  - Saltos de línea(br).
  - Listas ordenadas(ol) y desordenadas(ul).
  - Enlaces(a) y su atributo href.
  - Rutas absolutas y relativas
    - <b>Absolutas:</b> son aquellas que se identifican por su URL, por ejemplo, https://www.google.com
    - <b>Relativas:</b> son aquellas que se establecen de forma relativa a donde nos encontramos(el origen), por ejemplo dentro del mismo servidor o equipo local. "Carpeta1/carpeta2/archivo1". Algo a tener en cuenta es que para subor de directorio se usa <b>../</b>
  - Imágenes(img): hace uso del atributo <b>src</b> para indicar la ruta de la imagen. Es recomendable usar el atributo <b>alt</b> por cada imagen que greguemos.
    Es bueno considerar también la etiqueta <b>figure</b> y <b>figcaption</b>
  - Estructura semántica: son el conjuntmde etiquets que describen, le dan sentido y significado al conetenido de los elementos de nuestro sitio.
    - <b>header:</b> por lo general va al incio de la web, y se usa para definir la el contenido de cabecera.
    - <b>section:</b> agrupa contenido relacionado por su temática y relación entre si.
    - <b>article:</b> agrupa contenido relacionado enre si, pero además es aútónomo del resto del contenido del sitio; contenido que puede consumirse de forma independiente.
    - <b>aside:</b> contenido relacionado con el que el que tiene al rededor, por ejemplo cuando se encuentra dentro de un árticle.
    - <b>nav:</b> es el contenedor de toda la estructura de navegación del sitio.
    - <b>main:</b> representa el contenido principal del sitio, no debe haber mas un main por documento.
    - <b>footer:</b> por lo general suele usarse para contener la parte final del sitio, aunque esto será definido por su conetenido y no necesariamente por su posición.
    - <b>div</b>: agrupa contenido sin contenido semántico relacionado.

  <br>

---

<div id="css"/>

**2. CSS.**

- **Fundamentos.**

  - <b>Primeros pasos.</b>

    - Hojas de estilo en cascada, permite dar estilo<br>a todos nuestros elementos HTML.
    - La definición de los estilos tienen la siguiente <b>regla</b>:<br><b>Selector => propiedad => valor.</b><br>Como se muestra en el siguiente ejemplo:<br> donde main es el <b>selector</b>, color la <b>propiedad</b> y blue el <b>valor</b>.

      ```CSS
      main {
        color:blue;
        }
      ```

    - **Formas de añadir estilos**:<br>

      - <b>En linea:</b> haciendo uso del atributo style dentro de la etiqueta html a la cual queremos dar ciertos estilos css, NO es algo recomendable hacer, aunque es la <b>forma más específica</b> de aplicar estilos css.

      ```HTML
       <p style="color:blue">soy un párrafo con estilo inline</p>
      ```

      - <b>Internos:</b> hacemos uso de la etiqueta style dentro del head de nuestro archivo html.

      ```HTML
      <DOCTYPE html>
      <html lang="en">
        <head>
          <style type="text/css">
            h1{
              color: cyan;
              font-size: 16px;
            }
          </style>
        </head>
        <body>
          <h1>
            hola, soy un h1 con estilos internos
          </h1>
        </body>
      </html>
      ```

      - <b>Externos:</b> es la forma recomendad de aplicar estilos css, se pueden aplicar a un conjunto de documentos HTML y se importan a travez de la etiqueta link.

      ```HTML
       <link rel="stylesheet" href="css/misEstilos.css" />
      ```

    - <b>Selectores:</b> son las distintas formas en las que podemos aplicar estilos css a ciertos elementos html.<br>

      - **Selectores de Tipo**: nos permiten usar las propias etiquetas del documento html como selector.

      ```CSS
        p {
          color: red;
          font-weight:bold;
        }
        header {
          background-color:gray;
        }
      ```

      - **Selectores de clase**: estan echos para reutilizarse, permiten seleccionar elementos específicos, se asocia al elemento html con el atributo class, y en css, se identifica por medio de un punto antes del selector(nonbre de la clase).<br>Este tipo de selector es el más recomendado para trabajar con estilos css.

      ```CSS
        .clase {
          border:2px solid green;
          font-weight:bold;
        }
      ```

      - **Selectores de id**: estan echos para ser utilizadosa elementos más específicos (mayor especificidad que las clases), se asocian al elementos html con el atributo id, y en css se identica por medio del símbolo <b>#</b>.<br>Este tipo de selector solo puede ser usado una vez, por lo que no se recomienda para trabajar los estilos css, salvo se considere necesario, pues por lo general, son usados para trabajar con JavaScript.<br>

      ```CSS
       #identificador {
         border:2px solid orange;
         padding:10px;
       }
      ```

      - **Selectores descendientes**: son aquellos selectores que por ejemplo, se encuentran contenidos dentro de otros elementos, es decir en base a su relación. Pueden estar conformados por tipo, clases id, o por una combinación de todos ellos. al agruparse, su nivel de especifidad aumenta en relación a otros. Si bine podemos hacer uso de ellos, no es recomendable agrupar demasiados selectores para una misma declaración.<br>

      ```CSS
        header nav{
          color:cyan;
        }
        ul li a{
          text-decoration:none;
        }
        .contenedor p span{
          text-decoration:none;
        }
        footer nav.legal a{
          color:light-blue;
        }
      ```

      - **Pseudo Clases**: seleccionar en base a condiciones especiales.
        ¿Cómo seleccionamos un estado, posición o relación?

        - Cuando ponemos el puntero del raton sobre un enlace, o cuando un elemento es el segundo de su tipo.

        - De Estado: escenario especial en base al estado.

        ```CSS
          a:hover{
            text-decoration: undeline;
          }
        ```

        Esas👆👆 líneas de código funcionarán cuando se pose el puntero del mouse sobre el elemento a.

        - De Posición: buscamos un estado especial en base a la posición.

        ```CSS
        article p:first-child{
          font-size:1.5em;
        }
        ```

        Con esas👆👆 líneas de código indicamos un tamaño de fuente al primer elemento de tipo párrafo.

        Existen muchas pseudo - clases, podemo revisar más de ellas en el siguiente enlace.
        [Pseudo-Clases](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)

        - De Relación: buscamos un estado especial en base a una relación.

        ```CSS
          a:not(.destacado){
            color:gray;
          }
        ```

        Con esas👆👆 líneas de código seleccionamos elementos a que no tegan la clase destacado.

    - **Pseudo Elementos**: otorgan mayor control y precisión a la hora de crear estilos css.
      Se utilizan para definir partes específicas de un elemento.

      las Pseudo-Clases hacen uso de dos (::) pares puntos a diferencia de los Pseudo-Elementos que solo hacen uso de un (:) solo juego de dos puntos.

      - Pseudo elementos tipográficos.

      ```CSS
        h1::first-letter{
          color:red;
        }
        p::first-line{
          font-weight:bold;
        }
      ```

      Esas👆👆 líneas de código seleccionan la primera letra de los h1 y el primer elemento p respectivamente.

      - Pseudo elementos de contenido: añaden algo antes y/o despues del contenido original al que está asociado.

      ```CSS
        li::before{
          content:"🚧";
        }
        h1::after{
          content:"🙋‍♂️";
        }
      ```

      Esas👆👆 líneas de código, agregan un icono antes del elemento li y despues del elemento h1 respectivamente.

      En el siguiente enlace podremos aprender más Pseudo elementos [Pseudo-Elementos](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements)

    - **Píxeles en CSS**: en css tenemos dos clases de unidades de medida, absolutas y relativas, para el caso de los píxeles, encajan dentro de las absolutas.

      ```CSS
        p{
          font-size:32px;
        }
      ```

      Nos dan una precisión total,pues sin importar el dispositivo en el que se visualice, siempre mantendrá su valor.

    - **Porcentajes en CSS**: son unidades relativas, cuando se asigna como data type a un elemento, este se calcula con base en la medida del elemento ancestro.

      Para que funcione correctamente, la medida en el elemento padre debe estar especificada.

      ```CSS
        html, body{
          height:100%;
        }
        header{
          background-color:tomato;
          height:100%;
        }
      ```

      Representamos👆👆 un par de elementos padre y su relación de altura en porcentaje con el elemento hijo header, header ocupará el 100% de alto partiendo de la relación de tamaño con html y body.

      Los porcentajes se pueden utilizar en propiedades como width, height, margin y padding. además se pueden usar junto a unidades absolutas👇👇.

      ```CSS
        header{
          width:100%;
          min-width:1280px;
          max-width:1920px;
        }
      ```

    - **Em vs Rem**: son unidades relativas de css para trabajar con tipografías, aunque se pueden utilizar en otros elementos.

      Ambas unidades se computan (se convierten) en valores absolutos de pixel, basados en el valor font-size.

      - <b>em</b>: se calcula multiplicando en base al valor de font-size del elemento al que estamos accediendo. como el valor font-size es heredable, la unidad <b>em</b> presenta el efecto compuesto, es decir que si hubieran elementos hijos estos heredarían el valor del font-size y lo aumentarían.

      ```HTML
      <ul>
        <li>
          primer nivel
        </li>
        <ul>
          <li>
            segundo nivel
          </li>
        </ul>
      </ul>
      ```

      ```CSS
        html{
          font-size:16px;
          <!-- el valor base es 16px -->
        }
        li {
          font-size:2em;
          <!-- primer li valdría 32. -->
          <!-- segundo li valdría 64px -->
        }
      ```

      para el caso del ejemplo👆👆, el 2em hace referencia al valor(16px) del font-size heredado del padre html, si multiplicacmos sería 2 x el valor del font-size, entonces el primer elemento li valdría 32px y el segundo valdría 64px pues parte de la base del valor del primer li.

      Si agregásemos un tercer li como hijo del segundo, este partiría de la base de los 64px, los multiplicaría por los 2em de la declaracíon css, y por tanto valdría 128px.

      - <b>rem</b>: se calcula multiplicando en bas el valor del font-size del elemento root(HTML) del codumento, por defecto es 16 px. aunque este valor puede ser influenciado por la configuración tipográfico del nacegador que se use.

      ```CSS
        li{
          font-size:2rem;
        }
      ```

      Para este👆👆ejemplo, el valor sería de 32px, pues parte de la base de los 16px del elemento root, por lo que sería 16x2.

    **¿Cuando usar em o rem?**

    - ante la duda es mejor usar rem, ya que no tiene efecto compuesto.
    - usa unidades em para escalar tamaños en elementos que dependan del valor de font-size por herencia.
    - usa rem en elementos cuyo tamaño esté en base al elemento root(HTML).

    - **Color en CSS**: podemos expresarlo en diferenetes formas, como por sus nombres o keyword (yellow, red, etc). Además de eso, disponemos de las funciones <b>RGB, RGBA, HSLA</b> y la notación hexadecimal para crear colores.

      ```CSS
      div{
        background-color:cyan;
      }
      ```

      Palabras clave como👆👆👆 golden para identificar colores.

      ```CSS
      h1{
        color:rgb(255,255,255);
      }
      ```

      En este👆👆 caso, tenemos la función <b>rgb</b>(rojo, verde y azul) la cual acepta valores que van desde 0 hasta 255 en cada canal.

      ```CSS
      div{
        background-color:rgba(185,255,180,.5);
      }
      ```

      Para el👆👆👆 caso de <b>rgba</b>, funciona de forma similar a rgb, pero añade un canal extra de trasparencia(alpha), en el ejemplo, colocamos un .5 o 50% de transparencia.

      ```CSS
      div{
        background-color:hsla(45,180%,50%,.5);
      }
      ```

      En el caso de <b>hsla</b>👆👆👆,matiz, saturación, iluminación y trnasparencia(hue, saturarion, lightness, alpha).
      Hue es un ángulo de 0 a 360 grados, cubre todo el espectro de color.
      Saturation y lightness representan un valor entre 0 y 100 por ciento para la desaturación/saturación y oscuro/claro respectivamente.

      - **Color Hexadecimal**: es una de las formas más comunes de expresar colores en css, un color hexadecimal <b>está compuesto por tres pares de símbolos hexadecimales(base 16).</b>
      - el siguiente👇👇 es un ejemplo de la estructura.

      ```CSS
        div{
          background-color:#14c7eb;
        }
      ```

      para saber el verdadero valor para cada color se multiplica el primer símbolo por 16 y el segundo por 1, ambos resultados se suman obteniendo el valor para ese color, por ejemplo:

      - 14 = 1x16 + 4x1 = 20 para el color rojo de un rango de 0 a 255.
      - c = 12x16 + 7x1 = 199 para el color azúl de un rango de 0 a 255.
      - también se peude expresar transparencia en hexadecimel, agregando otro par de símbolos.

    - **Especificidad**: cuando dos o más reglas colisionan al momento de asignar estilos a un elemento, se tiene en cuenta una serie de atributos de las reglas css en conflicto para determinar cual de ellas se tomará en cuenta en primer lugar.

      En el siguiente👇👇👇 ejemplo vemos como al colisionar las declaraciones con una misma propiedad css, se aplicará la más específica o la ue tenga mayor peso.

      ```HTML
      <h1 id="titular" class="clase"> carrera frontend</h1>
      ```

      ```CSS
      #titular{
        color:goldenrod;
      }
      h1{
        color:red;
      }
      .clase{
        color:pink;
      }

      ```

      para calcular el valor de especificidad, se tiene en cuenta el número de selectores css que componen la regla, así como su prioridad. se valoran 4 tipos de selector css y su prioridad(de mayor a menor):

      - selector inline (atributo style).
      - selectores de Id.
      - selectores de clase y pseudo-clase.
      - slectores de tipo y pseudo-elementos.

        - Calculando la especificidad:

        ```
          selector en linea: 1,0,0,0
          selector de IF: 0,1,0,0
          selector de clase: 0,0,1,0
          selector de tipo: 0,0,0,1
          !important:9,9,9,9
        ```

      Dicho de forma sencilla, **el valor del selector en linea vale 1000, el de id vale 100, el de clase vale 10 y el de tipo 1**.

      Algo a tener en cuenta es el atributo **!mportant**, el cual **tiene un valor mucho mayor a cualquiera de los mencionados anteriormente**, es el que tiene mayor especificidad, sin importar donde se declare. Se debe tener cuidado con su uso, pues solo es recomendable en casos muy específicos.

    - **Herencia**: Nos ayuda a evitar escribir reglas CSS duplicadas, aplicando automáticamente algunas propiedades a todos los descendientes de un elemento.
      **No todas las propiedades css son heredables**, como por ejemplo el borde. Sin embargo, **podemos forzar** que se hereden ciertas propiedades con el valor **inherit**.
      Ahora, **¿Cómo podríamos saltarnos la herencia?** una forma podrría ser hacer mediante el valor none.

    - **Cascada**: es el algoritmo que el navegador utiliza para decidir que estilos CSS se aplican a los elementos, sobre todo cuando hay colisión entre ellos. La cascada usa los atributos de especificidad, origen, orden, importancia, etc. y asigna una prioridad, reglas que mayor priodidad tienen precendencia sobre reglas con menor prioridad. Tiene en cuenta el origen e importancia, coeficiente de especificidad y orden de aparición:

      - <b>Origen e importancia</b>: son los estilos que escribimos, personalizaciones y el user agent(estilos por defecto del navegador).
      - <b>Valor de especificidad</b>: se examina que selectores tiene mayor peso, algo que ya vimos en el concepto de especificidad. Aquellas reglas que tienen mayor valor de especificidad tienen mayor peso y prioridad que el resto.
      - <b>Orden de aparición</b>: Cuando dos reglas css tienen el mismo orige y valor de especificidad, el algoritmo de la cascada usa el orden de aparición para hacer su trabajo, basicamente, la última declaración CSS escrita gana, Esto también se aplica a los estilos CSS cargados desde fuentes externas. los últimos pueden sobreescribir a los anteriores.

---

<div id="js"/>

**3. JavaScript.** <br>

- **Comceptos Previos**:

  - introducido en 1995 por Brendan Erich.
  - ECMA es la organización que regula los estándares de JavaSvript.
  - Está en todas partes, en el lado del cliente y en el servidor(NODE).
  - Se pude crear aplicaciones de escritorio usando Electron.
  - Aplicaciones nativas usando Reac Native para android y ios.
  - threejs, permite trabajar en 3d con JavaScript.
  - JavaScript permite añadir lógica e intreacción a nuestros sitios web.
  - viene incluido en todos los navegadores y podemos hacer uso de el mediante la consola de nuestro navegador.
  - Primer contacto con JavaScript: [creando un timer](javascript-01.html)

- **JS con HTML**: hay diferentes formas de usar JavaScript con HTML. Todas ellas pasan por utilizar una nueva etiqueta llamada script.

```HTML
   <html lang="en">
     <head>
       <title>JS + HTML ✌</title>
       <script>
         const titulo = document.getElementById("saludo");
         console.log(titulo);
       </script>
     </head>
     <body>
       <h1 id="saludo">Hola mundo...!!!</h1>
     </body>
   </html>
```

- Debido a esto, podemos ejecutar sentencias JS que serán ejecuadas por el navegador al cargar el documento html👇👇👇.
- Sin embargo, una de las formas de asegurar que nuestras sentencias javascript sean ejecutadas correctamente es agregando el atributo **defer**, el cual nos asegura de que todos los elementos se cargen en memoria para luego ejecutar las sentencias js.
- Debido a lo anterior, la forma más común y aceptada como mejor práctica es tener nuestro código JavaScript en archivos independientes.
- Estos archivos deben tener la extensión **.js** (de javascript) y podemos hacer uso del artibuto **defer** para ejecutar el código JS después de haber cargado los elementos HTML.

- **La consola de JS**: Si algo no funciona, la consola es el primer lugar donde debes mirar. A través de la consola Js nosindicará de algún problema, junto con información del mismo.
- Podemos usar diferentes métodos del objetio console para estructurar y controlar mejor lo que ocurre en nuestro programa.
- consle.log, warn (warning) y error muestran información en la consola.
- También tenemos console.assert, con el cual podemos mostrar un mensaje si una condición no se cumple.

```JAVASCRIPT
    console.log("Hola mundo...");
    console.warn("Mensaje de alerta");
    console.error("error fatal");
    // ejemplo con assert
    const edad = prompt("Ingresa tu edad");
    console.assert(edad>=18, "⚠ no se cumple la edad mínima");
    // la edad debe ser mayor o igual a 18, si eso no es así, moestrará el mensaje de que no se cumple la edad.
```

- **¿Que son las variables?**: permite guardar un valor para ser usado luego. Es un espacio donde podemos guardar información para luego recuperarla.
- Podemos crear una variable con la palabra clave <b>var</b>, seguido de un identificador válido.

```JAVASCRIPT
  var nombre = "jorge";
  var edad = 35;
  // para invocar la variables lo hacemos de la siguiente manera
  nombre;
  console.log(nombre);
```

- Para recuperar una variable basta con <b>invocar</b> su nombre, es decir, el nombre que se le ha asignado.
- Si no existe entonces JavaScript nos arrojaría un error visible desde la consola.
- En resumen, cuando invocas una variable, JavaScript comprueba si esta existe.
- Si es así, <b>interpola</b>(tomar lo que hay dentro de la variable y colocarlo donde ha sido invocada) su valor en ese mismo lugar donde ocurre la invocación.
- Podemos reasignar una variable a otro valor.
- 👇🏻👇🏻👇🏻

```JAVASCRIPT
  var cantidad = 400;
  var nuevaCantidad = cantidad - 200;
```

- **If Else**: son parte de las estructuras de control las cuales nos permiten tomar desiciones.
- la más popular de estas estructuras de control es <b>if</b>.

```JAVASCRIPT
  if (edad >= 18){//condición
    // condición a comprobar. Si es verdadera (true), se ejecutan esas lineas de código.
  }else if(condición){
    // condición a comprbar
  }
```

- Podemos añadir otras clausulas a la estructura de control para preguntar por otras condiciones. gracias a **else if**.
- Las clausulas son mutuamente excluyentes, es decir. si una se evalua como true, se ejecuta el bloque y no se continúa evaluando el resto aunque hubiese alguna potencialmente verdadera.

```JAVASCRIPT
  var edad = 18;
  if (edad < 18){
    console.log("acces denegado");
  }else if(edad >=18){
    console.log("acceso permitido");
  }
```

- Con **else**, podemos añadir ua cláusula final que se ejecutará si ninguna de las anteriores ha sido evaluada como verdadera.

```JAVASCRIPT
  var edad = 20;
  if (edad < 20){
    // si es verdadera, se ejecuta y se acaba el programa
    console.log("acceso denegado");
  }else if(edad > 20){
    // se ejecutará si la primera condición no es verdadera
    console.log("acceso denegadoi");
  }else{
    // se ejecutará siempre y cuando las condiciones anteriores no se cumplan
    console.log("Tienes la edad apropiada");
  }
```

- el else if, se puede reemplazar por algo que se conoce como operador ternario.

```JAVASCRIPT
// estructura de ontrol con if else
  var edad = 18;
  if(edad >= 18){
    console.log("estás autorizado a ingresar");
  }else{
    console.log("no estás autorizado a ingresar");
  }
//  ahora lo mismo con el operador ternario.
  edad >= 18 ? console.log('estás autorizado') : console.log('no estás autorizado');
// el símbolo de interrogación establece la delimitacion para comprobar la condición como true y los dos puntos hacen la vez de else.
// otra forma de hacerlo más directo por consola
  console.log(edad >= 18 ? 'Estás autorizado' : 'No estás autorizado');
```

- Algo a considerar es que el operador ternario solo sirve para evaluar un if y un else, si se tiene varias condiciones se debe hacer uso del if canónico.

**Final del capítulo de introducción**

- Ahora continuaremos con nuestro módulo de [JavaSript a fondo](JavaScript.md)
