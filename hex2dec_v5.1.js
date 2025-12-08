// hexadecimális szám átalakítása decimális számmá (ver 5.1)

function hex2dec(h) {
  let sz;
  switch (h) {
    case "0": sz = 0; break;
    case "1": sz = 1; break;
    case "2": sz = 2; break;
    case "3": sz = 3; break;
    case "4": sz = 4; break;
    case "5": sz = 5; break;
    case "6": sz = 6; break;
    case "7": sz = 7; break;
    case "8": sz = 8; break;
    case "9": sz = 9; break;
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
      throw new Error("Hibás számjegy: " + h);
  }
  return sz;
}

let x = "24C";

console.log("Hexadecimal number: " + x);
console.log();

let d = 0;
let h = 1;

// helyiérték meghatározása (16^(hossz-1))
let i = 1;
while (i < x.length) {
  h *= 16;
  i++;
}

// hex szám feldolgozása
i = 0;
while (i < x.length) {
  let sz = hex2dec(x[i]);
  let r = sz * h;
  d += r;
  h /= 16;
  i++;
}

console.log("Decimal number: " + d);
console.log("__________");
