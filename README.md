# Carrera-FrontEnd

**Carrera FrontEnd Wmedia - Jorge Mendieta.**

⏳🖱💻Curso de desarrollo web completo y desde cero.⏳🖱💻

**HTML**, **CSS**, **JavaScript**, **Git & Github**

![Carrera FrontEnd](img/frontend.jpg)

## Temas Estudiados.

1. [HTML](#html)
2. [CSS](#css)

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

<div id="css"/>

**2. CSS a Fondo.**

- **Fundamentos.**

  - <b>Primeros pasos.</b>

    - Hojas de estilo en cascada, permite dar estilo<br>a todos nuestros elementos HTML.
    - La definición de los estilos tienen la siguiente <b>regla</b>:<br><b>Selector => propiedad => valor.</b><br>Como se muestra en el siguiente ejemplo:<br> donde main es el <b>selector</b>, color la <b>propiedad</b> y blue el <b>valor</b>.

      ```CSS
      main {
        color:blue;
        }
      ```

    - Formas de añadir estilos:<br>

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

      - Selectores de Tipo: nos permiten usar las propias etiquetas del documento html como selector.

      ```CSS
        p {
          color: red;
          font-weight:bold;
        }
        header {
          background-color:gray;
        }
      ```

      - Selectores de clase: estan echos para reutilizarse, permiten seleccionar elementos específicos, se asocia al elemento html con el atributo class, y en css, se identifica por medio de un punto antes del selector(nonbre de la clase).<br>Este tipo de selector es el más recomendado para trabajar con estilos css.

      ```CSS
        .clase {
          border:2px solid green;
          font-weight:bold;
        }
      ```

      - Selectores de id: estan echos para ser utilizadosa elementos más específicos (mayor especificidad que las clases), se asocian al elementos html con el atributo id, y en css se identica por medio del símbolo <b>#</b>.<br>Este tipo de selector solo puede ser usado una vez, por lo que no se recomienda para trabajar los estilos css, salvo se considere necesario, pues por lo general, son usados para trabajar con JavaScript.<br>

      ```CSS
       #identificador {
         border:2px solid orange;
         padding:10px;
       }
      ```

      - Selectores descendientes: son aquellos selectores que por ejemplo, se encuentran contenidos dentro de otros elementos, es decir en base a su relación. Pueden estar conformados por tipo, clases id, o por una combinación de todos ellos. al agruparse, su nivel de especifidad aumenta en relación a otros. Si bine podemos hacer uso de ellos, no es recomendable agrupar demasiados selectores para una misma declaración.<br>

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

      - Pseudo Clases: seleccionar en base a condiciones especiales.
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

      - Pseudo Elementos: otorgan mayor control y precisión a la hora de crear estilos css.
        Se utilizan para definir partes específicas de un elemento.

      las Pseudo-Clases hacen uso de dos (::) pares puntos a diferencia de los Pseudo-Elementos que solo hacen uso de un (:) solo juego de dos puntos.

      - Pseudo elementos tipográficos.

      ```CSS
        h1::first-letter{
          color:red;
        }
        p::first-child{
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

      - Píxeles en CSS: en css tenemos dos clases de unidades de medida, absolutas y relativas, para el caso de los píxeles, encajan dentro de las absolutas.

      ```CSS
        p{
          font-size:32px;
        }
      ```

      Nos dan una precisión total,pues sin importar el dispositivo en el que se visualice, siempre mantendrá su valor.

      - Porcentajes en CSS: son unidades relativas, cuando se asigna como data type a un elemento, este se calcula con base en la medida del elemento ancestro.

      Para que funciones correctamente, la medida en el elemento padre debe estar especificada.

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

      - Em vs Rem: son unidades relativas de css para trabajar con tipografías, aunque se peuden utilizar en otros elementos.

      Ambas unidades computan (se convierten) en valores absolutos de pixel, basados en el valor font-size.

      - em: se calcula multiplicando en base al valor de font-size del elemento al que estamos accediendo. como el valor font-size es heredable, la unidad em presenta el efecto compuesto, es decir que si hubieran elementos hijos estos heredarían el valor del font-size y lo aumentarían.

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

      - rem: se calcula multiplicando en bas el valor del font-size del elemento root(HTML) del codumento, por defecto es 16 px. aunque este valor puede ser influenciado por la configuración tipográfico del nacegador que se use.

      ```CSS
        li{
          font-size:2rem;
        }
      ```

      Para este👆👆ejemplo, el valor sería de 32px, pues parte de la base de los 16px del elemento root, por lo que sería 16x2.

      ¿Cuando usar em o rem?

      - ante la duda es mejor usar rem, ya que no tiene efecto compuesto.
      - usa unidades em para escalar tamaños en elementos que dependan del valor de font-size por herencia.
      - usa rem en elementos cuyo tamaño esté en base al elemento root(HTML).

      - Color en CSS: podemos expresarlo en diferenetes formas, como por sus nombres o keyword (yellow, red, etc). Además de eso, disponemos de las funciones RGB, RGBA, HSLA y la notación hexadecimal para crear colores.

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

      En este👆👆 caso, tenemos la función rgb(rojo, verde y azul) la cual acepta valores que van desde 0 hasta 255 en cada canal.

      ```CSS
      div{
        background-color:rgba(185,255,180,.5);
      }
      ```

      Para el👆👆👆 caso de rgba, funciona de forma similar a rgb, pero añade un canal extra de trasparencia(alpha), en el ejemplo, colocamos un .5 o 50% de transparencia.

      ```CSS
      div{
        background-color:hsla(45,180%,50%,.5);
      }
      ```

      En el caso de hsla👆👆👆,matiz, saturación, iluminación y trnasparencia(hue, saturarion, lightness, alpha).
      Hue es un ángulo de 0 a 360 grados, cubre todo el espectro de color.
      Saturation y lightness representan un valor entre 0 y 100 por ciento para la desaturación/saturación y oscuro/claro respectivamente.

      - Color Hexadecimal: es una de las formas más comunes de expresar colores en css, un color hexadecimal está compuesto por tres pares de símbolos hexadecimales(base 16).
      - el siguiente👇👇 es un ejemplo de la estructura.

      ```CSS
        div{
          background-color:#14c7eb;
        }
      ```

      para saber el verdadero valor para cada color se multiplica el primer símbolo por 16 y el segundo por 1, ambos resultados se suman obteniendo l valor para ese color, por ejemplo:

      - 14 = 1x16 + 4x1 = 20 para el color rojo de un rango de 0 a 255.
      - también se peude expresar transparencia en hexadecimel, agregando otro par de símbolos.

      - Especificidad:

  - Flexbox.
  - Grid.

  <br>

**3. JavaScript a Fondo.**

- variables
