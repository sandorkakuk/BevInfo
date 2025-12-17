# BevInfo
Bevezetés az informatikába órák gyakorlati anyagainak gyűjtőhelye
Hálózati Operációs rendszerek és IoT technológiák előadások prezentációi


> | JavaScript és Python összehasonlítása |
> | ------------- |
> | [JavaScript vs Python](/jsvspy/index.html)|





```bash
// lebegőpontos számot ábrázoló bináris számsorozat átalakítása decimális számmá (1. példa)

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

function binf2decf(x) {
  let d = 0;
  let helyiertek = 1 / 2;

  for (let i = 0; i < x.length; i++) {
    let sz = (x[i] === "1") ? 1 : 0;
    let r = sz * helyiertek;
    d += r;
    helyiertek /= 2;
  }

  return d;
}

/* feltétel: exp > 0, vagyis a lebegőpontos számábrázolás (1) esetének megfelelő algoritmust valósítjuk meg */

let s = "1";
let exp = "10000111";
let frc = "10100000000000000000000";

console.log("Lebegőpontos szám: " + s + " " + exp + " " + frc);
console.log();

let e;
let k;
let m;

if (s === "0") {
  e = 1;
} else {
  e = -1;
}

k = bin2dec(exp) - 127;
m = 1 + binf2decf(frc);

console.log("Előjel: " + e);
console.log("Karakterisztika: " + k);
console.log("Mantissza: " + m);
console.log();

let d = e * Math.pow(2, k) * m;

console.log("Decimális szám: " + d);
console.log("__________");

```

```bash
# lebegőpontos számot ábrázoló bináris számsorozat átalakítása decimális számmá (1. példa)

def bin2dec(x: str) -> int:
    d = 0
    helyiertek = 1

    for _ in range(1, len(x)):
        helyiertek *= 2

    for ch in x:
        sz = 1 if ch == "1" else 0
        r = sz * helyiertek
        d += r
        helyiertek //= 2
    return d


def binf2decf(x: str) -> float:
    d = 0.0
    helyiertek = 1 / 2

    for ch in x:
        sz = 1 if ch == "1" else 0
        r = sz * helyiertek
        d += r
        helyiertek /= 2
    return d


# feltétel: exp > 0, vagyis a lebegőpontos számábrázolás (1) esetének megfelelő algoritmust valósítjuk meg

s = "1"
exp = "10000111"
frc = "10100000000000000000000"

print("Lebegőpontos szám:", s, exp, frc)
print()

# előjel
e = 1 if s == "0" else -1

# karakterisztika
k = bin2dec(exp) - 127

# mantissza
m = 1 + binf2decf(frc)

print("Előjel:", e)
print("Karakterisztika:", k)
print("Mantissza:", m)
print()

d = e * (2 ** k) * m

print("Decimális szám:", d)
print("__________")

```
