<!-- JavaScript a Fondo -->

**Carrera FrontEnd - Jorge Mendieta**
⏳🖱💻Curso de desarrollo web completo y desde cero.⏳🖱💻
![Carrera FrontEnd](img/Javascript.jpg)

---

# JavaScript a Fondo

## Temas

**01.** **La etiqueta script** `<script></script>:`

- Es la forma canónica de incluir JavaScript en nuestros documentos html.
- Por lo general se lo ha incluido en el `<head>` del documento html.

```JAVASCRIPT
 <script>
   console.log("Hola Mundo 🔥")
 </script>
```

- A traves de `<script>` podemos importar código JS externo.
- Para lograrlo, hacemos uso del atributo src y una URL al recurso, ya sea relativo o absoluto.

```HTML
  <title>JS a Fondo</title>
  <!-- recurso externo -->
  <script src="main.js"></script>
  <!-- forma directa -->
  <script>
    console.log("Hola mundo");
  </script>
```

- Muchas veces podremos encontrar la etiqueta `<script>` en el `<footer>` en lugar del `<head>`de nuestro documento, para asegurarnos de que el **DOM** está listo antes de acceder a él.
- Hoy en día podemos haer uso del atributo **defer**, que difiere la carga de nuestro Js hastq eu el DOM esté listo.

```HTML
  <script defer src="main.js"></script>
```

- Algo a considerar en este primer punto es que tenemos la etiqueta `<noscript>` con la que podemos mostrar un mensaje al usuario cuyo navegador tenga JS desactivado.

```HTML
<!-- se mostrará en caso este desactivado -->
  <noscript>Javascript desactivado</noscript>
```

**02.** **Hoisting**: JavaScript es una lenguaje con tipos dinámicos, es decir, podemos asignar y reasignar difrerntes tipos a una misma variable, para hacerlo tnemos que utilizar dos fases diferentes: declaración e inicialización.

```JAVASCRIPT
   var numero //Declaración
   numero = 15 // Inicialización
   numero = "dies" // Reasignación
```

- Cuando declaramos una variable Js le asigna el tipo undefined, si intentamos referenciar la variable antes de ser declarada, lo que ocurrirá es que ya estará disponible, pues al interpretar el código, JavaScript alza al inicio del programa la declaración de las variables(no la inicialización) y las funciones declaradas.

```JAVASCRIPT
   console.log(nombre) //invocación
   var nombre // Declaración
```

- Esta característica, explica también el porque podemos invocar una función antes de declararla.

**03.** **Ámbito y Let**: hasta ahora hemos creado variables con var. Estas tienen un ámbito de función: pueden ser accedidas desde la función donde fueron declaradas (y funciones interiores).

- Cuando declaramos variables con var, desde un ámbito local si podemos acceder a un ámbito global, pero desde un ámbito global no podemos acceder a un ámbito local.

```JAVASCRIPT
   var nombre = "Jorge";|//varaible de ámbito global
   function saludar (){
     var nombre = "Enrique";//variable de ámbito local
     console.log("hola " + nombre);
   }
```

- Sin embargo, si declaramos variables con let (ES2105), tenemos ámbito de bloque, es decir, solo pueden ser accedidas desde el bloque en el que se declararon, o bloques interiores.

```JAVASCRIPT
   {
      let nombre = "Jorge";//varaible de ámbito de bloque
   }
    console.log(nombre);//nos devolverá un error pues la variable invocada no existe en su ámbito
```

- Este ámbito de bloque tienes sus ventajas, por ejemplo al usarlo con estructuras de control o de flujo.
- Además, al usar let tenemos un comportamiento mucho más estricto en el alzado(hoisting), algo que para muchos es otra ventaja.

**04.** **Constantes**: Si queremos crear una asociación conatante a un valor, podemos usar **const** para la creación de variables.

```JAVASCRIPT
   {
      const nombre = "Jorge";
   }
```

- Al utilizar const nos aseghuramos que no ocurrirá ninguna re-asociación a otro valor en esa variable.
- Usar constantes no significa que sean inmuntables. podemos mutar propiedades del valor asociado a la constante, esto se puede hacer poe ejmplo con los bjetos.

```JAVASCRIPT
   {
      const persona = {nombre: "Jorge"};
      persona.nombre="Enrique";
   }
    console.log(persona.nombre);
```

- Al igual que con let, disponemos de ámbito de bloque, es decir que soplo podremos acceder a la constante en el bloque en el que fueron declaradas.
- Las variables creadas con const no son alzadas.

**05.** **Funciones**: En JS tenemos tres formas de declarar funciones.

- La primera de ellas es a través de las funciones declaradas, estas requieren un identificador y son alzables.

```JAVASCRIPT
   function saludar(){
     console.log("Hola, me llamo Jorge");
   }
   saludar();//muestra el mensaje "Hola, me llamo Jorge" invocando a la función por su nombre
```

- También podemos declarar una expresión funcional, que consite en asociar una función a una variable. Esta puede tener nombre o ser anónima, y lo que se alza es la declaración no la asignación.

```JAVASCRIPT
   const saludar = function (){ //función anónima
     console.log("Hola, me llamo Jorge");
   }
   saludar();//muestra el mensaje "Hola, me llamo Jorge" invocando a la función por el nombre de la variable assicada a ella.
```

- Finalmente, podemos crear una versión aún más acortada de una funación anónima a través de las funciones de flecha (arrow functions).
- **No** disponen de contexto propio de **this**.
- Disponen de retorno implícito, delimitadores opcinales y no se alzan.
- Si se colocan las llaves en una función arrow, ya no tendremos return implítico, por lo cual, deberemos llamar a return.

```JAVASCRIPT
   const saludar = ()=>{ //función anónima
     console.log("Hola, me llamo Jorge");
   }
   saludar();

// Ejemplo de funcion con parámetro
    const hola = (nombre)=>{ //función anónima
     console.log("Hola, me llamo" + nombre);
   }
   saludar("Jorge");

  //  transformar a mayúsculas
  const mayuscula = (nombre)=>{
    nombre = nombre.toUpperCase();
    return nombre;
  }
  let nombre = mayuscula("jorge");
  console.log(nombre);

  // ahora una función con return implícito, cosa que no se logra si se colocaran las llaves.
  const mayuscula = nombre => nombre.toUpperCase();
  let nombre = mayuscula("jorge");
  console.log(nombre);
```

**06.** **Parámetros y Argunmentos**: Todas las funciones puden tner parámetros para hacerlas aún más polivalentes.

- los parámetros son accesibles como variables en el cuerpo de la función.
- Al invocar la función, pasamos valores como argumentos que son aceptados como parámetros.
- Los parámetros es lo que aceptamos al declarar la función y los argumentos son los valores que pasamos cuando invocamos la función.

```JAVASCRIPT
   function saludar(nombre){
     console.log("Hola, me llamo " + nombre);
   }
   saludar("Jorge");
```

**07.** **Argumentos y parámetros Rest**: con los parámetros rest (ES2015) podemos aceptar cualquier número de parámetros en una función.

- Con compatibles con los parámtros nsmales, pero deben declararse siempre al final.
- Una frma de indentificar este tipo de parámetros es por los tres puntos(...) que se muestran dentro de los paréntesis.
- Aquí tenemos un ejemplo con arrow function

```JAVASCRIPT
   function rest(...prices){
     // Array.isArray(prices);
     const total = prices.reduce((acc, curr)=>acc + curr);//acc es el acumulador y el cc es el current, es decir el sieguiente valor
     console.log(total);
   }
  rest(10,20,30,40);
```

- También pdemos hacerlo mediante una función

```JAVASCRIPT
   function rest(...prices){
     // Array.isArray(prices);
       const total = prices.reduce(function(acc, curr){ //ahora logramos lo mismo pero con una función
          return acc + curr;
     })
     console.log(total);
   }
```

- El método **reduce** solo puede ser utilizado dentro de las matrices, pues forma parte de su propotito, de su construcción.
- Ya no se recomienda hacer uso del objeto arguments

**08.** **Return**: las funciones javascript retornan undefined de forma implícita.

- Si especificamos algo que retornar, la función finalizará su ejecución y devolverá ese valor.

```JAVASCRIPT
   function checkOut(name, ...prices){
     const total = prices.reduce((acc, curr)=>{
       return acc + curr;
     })
    //  console.log(total)
    return name + " ha gastado " + total + " Soles"
   }
   console.log(checkOut("Jorge", 76, 80, 150, 43, 1400));
```

**09.** **Closures**: "un clousure es: retornar una función desde otra función, con acceso al entorno de variables de un ámbito exterior".

- Es una característica de JavaScript.
- el return cobra vida en este tipo de estructuras.

```JAVASCRIPT
   function soyUnClosure(){
    const variableLocal = "Jorge";
    return function(){
      return variableLocal.toUpperCase();
    }
   }
   const closure = souUnClosure();
   closure();// nos retornaría "JORGE"
```

- Entender como funcionan los closures es entender como funciona JavaScript.
- una de los usos más comunes es la creación de las factorías: exponen parte de su ámbito para crear otras funciones.

```JAVASCRIPT
// clsure para cambiar el un pedido
   function pedirPizza(UID){
    let cantidadPizza = 0;
    const pedido = `PEDIDO_${UID}`
    return function(pizza){
      cantidadPizza++;//incrementará con cada pedido y se mostrará al final del pedido
      return `${pedido}_${pizza}_${cantidadPizza}`;
    }
   }
   const pedidoUID = pedirPizza(100);
   console.log(pedidoUID("barbacoa"));
   console.log(pedidoUID("hahuayana"));
   console.log(pedidoUID("vegetal"));

```

- Cada closure retornado es independiente al anterior. es decir, forman un nuevo ámbito.
- Eso si, un closure puede modificar el estado atrapado en su interior.
- Un closure, guarda la referencia de las variables que se tiene en el scope superior, de modo que podemos acceder a ellas dentro de ese ámbito.
- Un closure es una función que encapsula una serie de variables y definiciones locales que unicamente serán accesibles si son devueltas con el operador return.

**10.** **IIFE - Expresiones Funcionales Inmediatamente Invocadas**: son las siglas de "Inmediately invoked function expression".

- La parte mas importante es =>> inmediatamente.

```JAVASCRIPT
  (function(){
    // haz cosas
  })()
```

- Para crear una IIFE debemos envolver una función con el operador de agrupación.
- De esta forma, indicamos que es una expresión que debe ser evaluada.
- Como la expresión es evaluada como una función, podemos añadir unos paréntesis al final para auto ejecutarla inmediatemente.
- Recordemos que una expresión funcional es una función que se encuentra dentro de una variable.

```JAVASCRIPT
  (function (name){
    console.log("Hola mi nombre es " + name)
  })("Jorge")
  // esto nos devolverá, "hola mi nombre es Jorge"
```

- Este tipo de expreiones funcionales crea un ámbito quese autoinvoca.
- La principal utilidad de un IIFEes la auto-creación de unámbito funcional nuevo e independiente.
- Un ejemplo útil típico es su uso con bucles for.

```JAVASCRIPT
  for (let i = 0; i < 10; i++){
    console.log(i);
    // agregamos nuestro IIFE
    (function(i){
      setTimeout(function(){
        console.log("El número es " + i);
      }, 1000)
    })(i)
  }
```

- Otro ejemplo es el patrón de módulo(aunque ya no se usa mucho actualmente)

```JAVASCRIPT
const person = (function(){
  const name = "Jorge";
  let distance = 0;

  function greet(){
    console.log("Hola me llamo " + name);
  }
  function run(){
    distance++;
    console.log(`${name} ran ${distance} km`);
  }
  return {
    greet, run
  }
})()
person.greet();
person.run();
```

**11.** **Callbacks en JavaScript**: Es una función que se pasa a otra función como argumento para ejecutarla luego.

```JAVASCRIPT
  function miFunción(fn){
    // callback
    fn()
  }
```

- Existen callbacks síncronos y asíncronos.
