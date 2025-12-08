// hexadecimális szám átalakítása decimális számmá (ver 2.0)

let x = "24C";

console.log("Hexadecimális szám: " + x);
console.log();

let d = 0;
let helyiertek = 1;

// helyiérték meghatározása (16^(hossz-1))
let i = 1;
while (i < x.length) {
  helyiertek = helyiertek * 16;
  i = i + 1;
}

// hex szám feldolgozása
i = 0;
while (i < x.length) {
  let sz;
  switch (x[i]) {
    case "a":
    case "A": sz = 10; break;
    case "b":
    case "B": sz = 11; break;
    case "c":
    case "C": sz = 12; break;
    case "d":
    case "D": sz = 13; break;
    case "e":
    case "E": sz = 14; break;
    case "f":
    case "F": sz = 15; break;
    default:
      sz = parseInt(x[i], 10);
  }
  let r = sz * helyiertek;
  d = d + r;
  helyiertek = helyiertek / 16;
  i = i + 1;
}

console.log("Decimális szám: " + d);
console.log("__________");
