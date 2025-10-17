// Bináris szám átalakítása decimális számmá

const x = "1101";

console.log("Bináris szám:", x);
console.log();

let d = 0;
let helyiertek = 1;

// Helyiérték kiszámítása a legnagyobb helyiértéktől indulva
for (let i = 1; i < x.length; i++) {
    helyiertek *= 2;
}

for (let i = 0; i < x.length; i++) {
    const sz = x[i] === "1" ? 1 : 0;
    console.log("   Számjegy   :", sz);
    console.log("   Helyi érték:", helyiertek);
    const r = sz * helyiertek;
    console.log("      Részösszeg:", r);
    d += r;
    helyiertek = Math.floor(helyiertek / 2); // Egész osztás
}

console.log();
console.log("Decimális szám:", d);
console.log("__________");
