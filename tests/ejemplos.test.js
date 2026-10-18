const test = require("node:test");
const assert = require("node:assert/strict");

const {
  NodoBinario,
  preorden,
  inorden,
  postorden,
  altura,
  contar,
  contarHojas,
  evaluar,
} = require("../ejemplos");

function crearArbolDeEjemplo() {
  return new NodoBinario(
    "*",
    new NodoBinario("+", new NodoBinario(3), new NodoBinario(5)),
    new NodoBinario("-", new NodoBinario(8), new NodoBinario(2))
  );
}

test("recorre el arbol en preorden, inorden y postorden", () => {
  const raiz = crearArbolDeEjemplo();

  assert.deepEqual(preorden(raiz), ["*", "+", 3, 5, "-", 8, 2]);
  assert.deepEqual(inorden(raiz), [3, "+", 5, "*", 8, "-", 2]);
  assert.deepEqual(postorden(raiz), [3, 5, "+", 8, 2, "-", "*"]);
});

test("calcula altura, cantidad de nodos y hojas", () => {
  const raiz = crearArbolDeEjemplo();

  assert.equal(altura(raiz), 2);
  assert.equal(contar(raiz), 7);
  assert.equal(contarHojas(raiz), 4);
});

test("evalua la expresion aritmetica del arbol", () => {
  assert.equal(evaluar(crearArbolDeEjemplo()), 48);
});

test("trata un arbol vacio correctamente en los recorridos y conteos", () => {
  assert.deepEqual(preorden(null), []);
  assert.deepEqual(inorden(null), []);
  assert.deepEqual(postorden(null), []);
  assert.equal(altura(null), -1);
  assert.equal(contar(null), 0);
  assert.equal(contarHojas(null), 0);
});
