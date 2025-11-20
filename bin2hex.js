// bináris szám átalakítása hexadecimális számmá

function dec2hex(sz) {
  let hx = "-1";
  switch (sz) {
    case 10: hx = "A"; break;
    case 11: hx = "B"; break;
    case 12: hx = "C"; break;
    case 13: hx = "D"; break;
    case 14: hx = "E"; break;
    case 15: hx = "F"; break;
    default:
      hx = "" + sz;
  }
  return hx;
}



let x = "10101101";

// vezető nullák hozzáadása, hogy a hossz 4 többszöröse legyen
while (x.length % 4 !== 0) {
  x = "0" + x;
}

let k = x.length - 1;
let t = ""; // végeredmény

let s = "";
let h = 0;
let helyiertek = 1;

for (let i = 0; i < x.length; i++) {
  s = x[k] + s;
  if (x[k] === "1") {
    h += helyiertek;
  }
  helyiertek *= 2;
  k--;

  if (i % 4 === 3) {
    console.log("    " + s + " = " + h + " = " + dec2hex(h));
    t = dec2hex(h) + t;
    s = "";
    h = 0;
    helyiertek = 1;
  }
}

console.log();
console.log(x + " = " + t);
console.log("____________");
