// decimális szám átalakítása bináris számmá kivonásokkal

let x = 314;

console.log("Decimális szám: " + x);
console.log();

let b = "";
let helyiertek = 1;

// legnagyobb helyiérték meghatározása
while (2 * helyiertek <= x) {
  helyiertek *= 2;
}

// bináris számjegyek meghatározása
while (helyiertek >= 1) {
  if (helyiertek <= x) {
    b += "1";
    console.log("   Számjegy:    " + 1);
    console.log("   Helyi érték: " + helyiertek);
    x -= helyiertek;
  } else {
    b += "0";
    console.log("   Számjegy:    " + 0);
    console.log("   Helyi érték: " + helyiertek);
  }
  helyiertek /= 2;
}

console.log();
console.log("Bináris szám: " + b);
console.log("__________");
