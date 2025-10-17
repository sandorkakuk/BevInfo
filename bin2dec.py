# Bináris szám átalakítása decimális számmá

x = "1101"

print("Bináris szám:", x)
print()

d = 0
helyiertek = 1

# Helyiérték kiszámítása a legnagyobb helyiértéktől indulva
for i in range(1, len(x)):
    helyiertek *= 2

for i in range(len(x)):
    if x[i] == "1":
        sz = 1
    else:
        sz = 0

    print("   Számjegy   :", sz)
    print("   Helyi érték:", helyiertek)
    r = sz * helyiertek
    print("      Részösszeg:", r)
    d += r
    helyiertek //= 2  # Egész osztás, hogy ne legyen lebegőpontos

print()
print("Decimális szám:", d)
print("__________")
