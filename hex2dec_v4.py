# hexadecimális szám átalakítása decimális számmá (ver 4.0)

def hex2dec(hx: str) -> int:
    if hx in ("a", "A"):
        return 10
    if hx in ("b", "B"):
        return 11
    if hx in ("c", "C"):
        return 12
    if hx in ("d", "D"):
        return 13
    if hx in ("e", "E"):
        return 14
    if hx in ("f", "F"):
        return 15
    return int(hx)

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
