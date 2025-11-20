// Bináris törtszám átalakítása decimális törtté

const x = "1101.11";
console.log("A bináris szám:", x);
let sz = 0;

// Először keressük meg a tizedespont helyét
let pontIndex = x.indexOf(".");

// Ha nincs pont, akkor az egész rész a teljes string
if (pontIndex === -1) {
  pontIndex = x.length;
}

// Egész rész feldolgozása (balról jobbra)
for (let i = 0; i < pontIndex; i++) {
  if (x[i] === "1") {
    // hatvány: mennyi van még hátra
    let h = (pontIndex - 1 - i);
    sz += 2 ** h;
    console.log("Az egész rész: ", sz);
  }
}

// Tört rész feldolgozása (pont utáni karakterek)
for (let i = pontIndex + 1; i < x.length; i++) {
  if (x[i] === "1") {
    // tört részben az első karakter 2^-1, a második 2^-2, stb.
    let h = -(i - pontIndex);
    sz += 2 ** h;
    console.log("A tört rész: ", sz);
  }
}

console.log("A decimális szám:", sz);
