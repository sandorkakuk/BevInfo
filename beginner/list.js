// Lista létrehozása
let gyumolcsok = ["alma", "banán", "cseresznye"];

// Elem hozzáadása
gyumolcsok.push("szőlő");

// Elem törlése
gyumolcsok = gyumolcsok.filter(item => item !== "banán");

// Lista bejárása
gyumolcsok.forEach(gyumolcs => {
  console.log("Gyümölcs:", gyumolcs);
});

// Keresés
if (gyumolcsok.includes("alma")) {
  console.log("Az 'alma' szerepel a listában.");
}
