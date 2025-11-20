// dec2bin - egész + tört rész
let x = 13.75;
console.log("Decimális szám:", x);

// Egész rész
let egesz = Math.floor(x);
let b = "";
let q = egesz;

while (q > 0) {
  let maradek = q % 2;
  b = maradek + b;
  q = Math.floor(q / 2);
}

// Tört rész
let tort = x - egesz;
let tortBin = "";
let maxBits = 10; // maximum 10 jegy a tört részben

while (tort > 0 && tortBin.length < maxBits) {
  tort *= 2;
  if (tort >= 1) {
    tortBin += "1";
    tort -= 1;
  } else {
    tortBin += "0";
  }
}

console.log("Bináris szám:", b + (tortBin ? "." + tortBin : ""));
