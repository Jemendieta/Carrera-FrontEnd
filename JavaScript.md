<!-- JavaScript a Fondo -->

**Carrera FrontEnd - Jorge Mendieta**
⏳🖱💻Curso de desarrollo web completo y desde cero.⏳🖱💻
![Carrera FrontEnd](img/Javascript.jpg)

---

# JavaScript a Fondo

## Temas

1. **La etiqueta script** `<script></script>:`

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

2. **Hoisting**:
