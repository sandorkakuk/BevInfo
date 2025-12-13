// Diszjunkció (VAGY) igazságtáblázata

function disz(x, y) {
  var a = Boolean(x), b = Boolean(y);
  var c = a || b;
  return Number(c);
}

console.log("A B A∨B");
console.log("-------");

for (var i = 0; i <= 1; i++) {
  for (var j = 0; j <= 1; j++) {
    var k = disz(i, j);
    console.log(i + " " + j + "  " + k);
  }
}

console.log("-------");
