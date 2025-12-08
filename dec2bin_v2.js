// decimális szám átalakítása bináris számmá (ver. 2.0)

let x = 314;

console.log("Decimális szám: " + x);
console.log();

let b = "";
let q, m;

while (x > 0) {
  if (x % 2 === 1) {
    m = 1;
    x = x - 1;
  } else {
    m = 0;
  }
  q = x / 2;
  console.log("   Hányados: " + q + ", maradék: " + m);
  b = m + b;
  x = q;
}

console.log();
console.log("Bináris szám: " + b);
console.log("__________");
