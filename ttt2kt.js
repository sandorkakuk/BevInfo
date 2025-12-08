// tizedestört átalakítása kettedestörtté

let x = 0.6875;

console.log("A törtszám: " + x);
console.log();

let maxi = 50;
let s = "";

let i = 1;
while (x > 0 && i <= maxi) {
  x *= 2;
  if (x < 1) {
    process.stdout.write("   egész rész: 0,");
    s += "0";
  } else {
    process.stdout.write("   egész rész: 1,");
    s += "1";
    x = x - 1;
  }
  console.log("   törtrész: " + x);
  if (i % 4 === 0) {
    console.log("..... " + i + ". ciklus .....");
    s += " ";
  }
  i++;
}

console.log();
console.log("A tört (első " + maxi + " kettedesjegy): 0." + s);
console.log("__________");
