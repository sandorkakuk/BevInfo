// Negáció igazságtáblázata

function neg(x) {
  var a = Boolean(x);
  var c = !a;
  return Number(c);
}

console.log("A  ⌝A");
console.log("-----");

for (var i = 0; i <= 1; i++) {
  var k = neg(i);
  console.log(i + "  " + k);
}

console.log("-----");
