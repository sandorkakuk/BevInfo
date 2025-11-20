// racionális törtszám átalakítása kettedestörtté (1. verzió)
// feltétel: az átalakítandó törtszám pozitív és 1-nél kisebb (x < y)

let x = 5, y = 7;

console.log("A törtszám: " + x + "/" + y);
console.log();

let maxi = 50;
let s = "";

let i = 1;
while (x > 0 && i <= maxi) {
  if (2 * x < y) {
    process.stdout.write("   egész rész: 0,");
    s += "0";
    x = 2 * x;
  } else {
    process.stdout.write("   egész rész: 1,");
    s += "1";
    x = 2 * x - y;
  }
  console.log("   törtrész: " + x + "/" + y);

  if (i % 4 === 0) {
    console.log("..... " + i + ". ciklus .....");
    s += " ";
  }
  i++;
}

console.log();
console.log("A tört (első " + maxi + " kettedesjegy): 0." + s);
console.log("__________");
