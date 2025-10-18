# Változók deklarálása
nev = "Sándor"
kor = 42
utazik = True

# Kiíratás
print(f"{nev} {kor} éves.")
if utazik:
    print("Sándor épp utazik.")

# For ciklus – lista bejárása
helyek = ["Budapest", "Debrecen", "Nyíregyháza"]
for varos in helyek:
    print(f"Úticél: {varos}")

# Függvény (bekötés)
def koszont(nev):
    print(f"Üdvözöllek, {nev}!")

koszont("Sándor")
