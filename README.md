# Ejemplo de arbol binario

Este programa construye un arbol binario para la expresion `((3 + 5) * (8 - 2))`.
Muestra los recorridos en preorden, inorden y postorden, ademas de la altura,
el numero de nodos, las hojas y el resultado de evaluar la expresion.

## Ejecucion

Requiere Node.js 24 o posterior. Desde esta carpeta, ejecuta:

```bash
node ejemplos.js
```

## Desarrollo y pruebas

Instala las dependencias y ejecuta las comprobaciones:

```bash
npm ci
npm run build
npm test
```

El workflow de GitHub Actions ejecuta estas comprobaciones en cada `push` y
pull request a `main`. Al completarse, puedes descargar el ZIP de la aplicacion
desde los artefactos de la ejecucion en GitHub Actions.
