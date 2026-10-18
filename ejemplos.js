/*
 * Tipo de arbol: ARBOL BINARIO
 * Aplicacion: arbol de expresion aritmetica ((3 + 5) * (8 - 2)).
 * Cada nodo tiene maximo dos hijos (izquierdo y derecho).
 * Ejecutar con: node ejemplos.js
 */
class NodoBinario {
  constructor(dato, izq = null, der = null) {
    this.dato = dato;
    this.izq = izq;
    this.der = der;
  }
}

const preorden = (n) =>
  n === null ? [] : [n.dato, ...preorden(n.izq), ...preorden(n.der)];

const inorden = (n) =>
  n === null ? [] : [...inorden(n.izq), n.dato, ...inorden(n.der)];

const postorden = (n) =>
  n === null ? [] : [...postorden(n.izq), ...postorden(n.der), n.dato];

const altura = (n) =>
  n === null ? -1 : 1 + Math.max(altura(n.izq), altura(n.der));

const contar = (n) =>
  n === null ? 0 : 1 + contar(n.izq) + contar(n.der);

function contarHojas(n) {
  if (n === null) return 0;
  if (n.izq === null && n.der === null) return 1;
  return contarHojas(n.izq) + contarHojas(n.der);
}

// Evalua la expresion con un recorrido en postorden
function evaluar(n) {
  if (n.izq === null && n.der === null) return n.dato;
  const a = evaluar(n.izq);
  const b = evaluar(n.der);
  switch (n.dato) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    default: return a / b;
  }
}

module.exports = {
  NodoBinario,
  preorden,
  inorden,
  postorden,
  altura,
  contar,
  contarHojas,
  evaluar,
};

if (require.main === module) {
  // ((3 + 5) * (8 - 2))
  const raiz = new NodoBinario(
    "*",
    new NodoBinario("+", new NodoBinario(3), new NodoBinario(5)),
    new NodoBinario("-", new NodoBinario(8), new NodoBinario(2))
  );

  console.log("=== ARBOL BINARIO: EXPRESION ARITMETICA ===");
  console.log("Preorden  (prefija) :", preorden(raiz).join(" "));
  console.log("Inorden   (infija)  :", inorden(raiz).join(" "));
  console.log("Postorden (postfija):", postorden(raiz).join(" "));
  console.log("Altura :", altura(raiz));
  console.log("Nodos  :", contar(raiz));
  console.log("Hojas  :", contarHojas(raiz));
  console.log("Resultado de la expresion:", evaluar(raiz));
}