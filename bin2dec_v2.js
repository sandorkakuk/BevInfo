// bináris szám átalakítása decimális számmá (ver 2.0)

let x = "1101";

console.log("Bináris szám: " + x);
console.log();

let d = 0;
let helyiertek = 1;

// helyiérték meghatározása (2^(hossz-1))
let i = 1;
while (i < x.length) {
  helyiertek = helyiertek * 2;
  i = i + 1;
}

// bináris szám feldolgozása
i = 0;
while (i < x.length) {
  let sz = (x[i] === "1") ? 1 : 0;
  let r = sz * helyiertek;
  d = d + r;
  helyiertek = helyiertek / 2;
  i = i + 1;
}

console.log("Decimális szám: " + d);
console.log("__________");
