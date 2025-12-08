# hexadecimális szám átalakítása decimális számmá (ver 3.0)

x = "24C"

print("Hexadecimális szám:", x)
print()

d = 0
helyiertek = 1

# helyiérték meghatározása (16^(hossz-1))
i = 1
while i < len(x):
    helyiertek *= 16
    i += 1

# hex szám feldolgozása
i = 0
while i < len(x):
    ch = x[i]
    if ch in ("a", "A"):
        sz = 10
    elif ch in ("b", "B"):
        sz = 11
    elif ch in ("c", "C"):
        sz = 12
    elif ch in ("d", "D"):
        sz = 13
    elif ch in ("e", "E"):
        sz = 14
    elif ch in ("f", "F"):
        sz = 15
    else:
        sz = int(ch)

    r = sz * helyiertek
    d += r
    helyiertek //= 16
    i += 1

print("Decimális szám:", d)
print("__________")
