// decimális számjegy átalakítása 4 bites bináris számmá

let x = 3;

console.log("Decimális számjegy: " + x);
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
  b = m + b;
  x = q;
}

let i = b.length;
while (i < 4) {
  b = "0" + b; // vezető nullák hozzáadása
  i = i + 1;
}

console.log("Bináris szám: " + b);
console.log("__________");
