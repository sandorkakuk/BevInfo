// hexadecimális szám átalakítása decimális számmá (ver 3.0)

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
  let sz;
  if (x[i] === "a" || x[i] === "A") {
    sz = 10;
  } else if (x[i] === "b" || x[i] === "B") {
    sz = 11;
  } else if (x[i] === "c" || x[i] === "C") {
    sz = 12;
  } else if (x[i] === "d" || x[i] === "D") {
    sz = 13;
  } else if (x[i] === "e" || x[i] === "E") {
    sz = 14;
  } else if (x[i] === "f" || x[i] === "F") {
    sz = 15;
  } else {
    sz = parseInt(x[i], 10);
  }

  let r = sz * helyiertek;
  d += r;
  helyiertek /= 16;
  i++;
}

console.log("Decimális szám: " + d);
console.log("__________");
