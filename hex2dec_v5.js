// hexadecimális szám átalakítása decimális számmá (ver 5.0)

function hex2dec(h) {
  let sz;
  if (h === "a" || h === "A") {
    sz = 10;
  } else if (h === "b" || h === "B") {
    sz = 11;
  } else if (h === "c" || h === "C") {
    sz = 12;
  } else if (h === "d" || h === "D") {
    sz = 13;
  } else if (h === "e" || h === "E") {
    sz = 14;
  } else if (h === "f" || h === "F") {
    sz = 15;
  } else {
    sz = parseInt(h, 10);
  }
  return sz;
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
