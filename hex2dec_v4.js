// hexadecimális szám átalakítása decimális számmá (ver 4.0)

function hex2dec(hx) {
  if (hx === "a" || hx === "A") return 10;
  if (hx === "b" || hx === "B") return 11;
  if (hx === "c" || hx === "C") return 12;
  if (hx === "d" || hx === "D") return 13;
  if (hx === "e" || hx === "E") return 14;
  if (hx === "f" || hx === "F") return 15;
  return parseInt(hx, 10);
}

let x = "24C";

console.log("Hexadecimális szám: " + x);
console.log();

let d = 0;
let helyiertek = 1;

// helyiérték meghatározása (16^(hossz-1))
let i = 1;
while (i < x.length) {
  helyiertek *= 16;
  i++;
}

// hex szám feldolgozása
i = 0;
while (i < x.length) {
  let sz = hex2dec(x[i]);
  let r = sz * helyiertek;
  d += r;
  helyiertek /= 16;
  i++;
}

console.log("Decimális szám: " + d);
console.log("__________");
