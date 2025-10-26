
let aszam=3; let bszam=4; let cszam=5;

  if (
    aszam + bszam >= cszam &&     aszam + cszam >= bszam &&     bszam + cszam >= aszam
  ) {
    console.log("szerkeszthető");
    if (aszam === bszam || aszam === cszam || bszam === cszam) {
      console.log("egyenlő szárú háromszög");}
    else if ( aszam * aszam + bszam * bszam === cszam * cszam || aszam * aszam + cszam * cszam === bszam * bszam || bszam * bszam + cszam * cszam === aszam * aszam
    ) {
      console.log("derékszögű háromszög");    }
    else {
      console.log("általános háromszög");    }
  }
  else {
    console.log("nem szerkeszthető");
  }


