# hexadecimális szám átalakítása decimális számmá (ver 5.0)

def hex2dec(h: str) -> int:
    if h in ("a", "A"):
        sz = 10
    elif h in ("b", "B"):
        sz = 11
    elif h in ("c", "C"):
        sz = 12
    elif h in ("d", "D"):
        sz = 13
    elif h in ("e", "E"):
        sz = 14
    elif h in ("f", "F"):
        sz = 15
    else:
        sz = int(h)
    return sz

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
    sz = hex2dec(x[i])
    r = sz * helyiertek
    d += r
    helyiertek //= 16
    i += 1

print("Decimális szám:", d)
print("__________")
