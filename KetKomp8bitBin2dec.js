// kettes komplemens kódban adott (8 bites) bináris szám átalakítása decimális számmá

function bin2dec(x) {
  let d = 0;
  let helyiertek = 1;

  for (let i = 1; i < x.length; i++) {
    helyiertek *= 2;
  }

  for (let i = 0; i < x.length; i++) {
    let sz = (x[i] === "1") ? 1 : 0;
    let r = sz * helyiertek;
    d += r;
    helyiertek /= 2;
  }

  return d;
}

function bin2binc(x) {
  let xc = "";
  for (let i = 0; i < x.length; i++) {
    xc += (x[i] === "1") ? "0" : "1";
  }
  return xc;
}

function inc(x) {
  let xc = "";
  let j = x.length - 1; // utolsó karakter indexe
  let atvitel = 1;
  while (j >= 0) {
    if (x[j] === "0" && atvitel === 0) {
      xc = "0" + xc;
    } else if (x[j] === "0" && atvitel === 1) {
      xc = "1" + xc;
      atvitel = 0;
    } else if (x[j] === "1" && atvitel === 0) {
      xc = "1" + xc;
    } else {
      xc = "0" + xc;
      atvitel = 1;
    }
    j = j - 1;
  }
  return xc;
}

/* feltétel: nyolc biten ábrázoljuk a számokat (m=8), tehát xb.length=8 teljesül */

let xb = "10000001";
let s;

console.log("Bináris szám: " + xb);
console.log();

if (xb[0] === "0") { // előjelbit pozitív
  s = "+";
} else { // előjelbit negatív
  s = "-";
  let x = bin2binc(xb);
  console.log("Egyes komplemens: " + x);
  xb = inc(x);
  console.log("Kettes komplemens: " + xb);
  console.log();
}

console.log("Decimális szám: " + s + bin2dec(xb));
console.log("__________");
