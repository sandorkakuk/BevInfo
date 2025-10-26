# Lista létrehozása
gyumolcsok = ["alma", "banán", "cseresznye"]

# Elem hozzáadása
gyumolcsok.append("szőlő")

# Elem törlése
gyumolcsok.remove("banán")

# Lista bejárása
for gyumolcs in gyumolcsok:
    print("Gyümölcs:", gyumolcs)

# Keresés
if "alma" in gyumolcsok:
    print("Az 'alma' szerepel a listában.")
