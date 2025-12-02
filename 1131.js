const x ="1011";

console.log(x);
let sz=0;
const hex="";
let h=x.length-1;


for (let i=1;i<x.length+1;i++) {
  if (x[i]==="1") {
    sz+=2**h;
    console.log (sz);
    h-=1;
    console.log(h);
  }
}
console.log ("A string iedik eleme:",x[i])
console.log ("xedik hatvány:",h)
console.log("A",x,"bináris szám, hexafecimális értée:", hex)

if (sz===10) {
  hex="A";
}
  else if (sz===11) {
    hex="B";
  }
  else if (sz===12) {
    hex="C";
  } else if (sz===13) {
    hex="D";
  } else if (sz===14) {
    hex="E";
  } else if (sz===15) {
    hex="F";
  }
  else {
    hex==sz;
}
