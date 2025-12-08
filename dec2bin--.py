# decimális szám átalakítása bináris számmá kivonásokkal

x = 314

print("Decimális szám:", x)
print()

b = ""
helyiertek = 1

# legnagyobb helyiérték meghatározása
while 2 * helyiertek <= x:
    helyiertek *= 2

# bináris számjegyek meghatározása
while helyiertek >= 1:
    if helyiertek <= x:
        b += "1"
        print("   Számjegy:    ", 1)
        print("   Helyi érték: ", helyiertek)
        x -= helyiertek
    else:
        b += "0"
        print("   Számjegy:    ", 0)
        print("   Helyi érték: ", helyiertek)
    helyiertek //= 2

print()
print("Bináris szám:", b)
print("__________")
