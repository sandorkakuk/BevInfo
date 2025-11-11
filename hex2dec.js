// hex2dec
let x = "1A2";
let a = 0;

for (let i = 0; i < x.length; i++) {
  let h = x.length - 1 - i;
  let dec;

  if (x[i] === "A" || x[i] === "a") dec = 10;
  else if (x[i] === "B" || x[i] === "b") dec = 11;
  else if (x[i] === "C" || x[i] === "c") dec = 12;
  else if (x[i] === "D" || x[i] === "d") dec = 13;
  else if (x[i] === "E" || x[i] === "e") dec = 14;
  else if (x[i] === "F" || x[i] === "f") dec = 15;
  else dec = Number(x[i]);

  a += dec * (16 ** h);
  console.log("szorzat:", x[i], "érték:", dec, "hatvány:", h, "összeg:", a);
}

console.log("A decimális szám:", a);
