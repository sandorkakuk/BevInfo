# hexadecimális szám átalakítása decimális számmá (ver 5.1)

def hex2dec(h: str) -> int:
    if h == "0": return 0
    elif h == "1": return 1
    elif h == "2": return 2
    elif h == "3": return 3
    elif h == "4": return 4
    elif h == "5": return 5
    elif h == "6": return 6
    elif h == "7": return 7
    elif h == "8": return 8
    elif h == "9": return 9
    elif h in ("a", "A"): return 10
    elif h in ("b", "B"): return 11
    elif h in ("c", "C"): return 12
    elif h in ("d", "D"): return 13
    elif h in ("e", "E"): return 14
    elif h in ("f", "F"): return 15
    else:
        raise ValueError("Hibás számjegy: " + h)

x = "24C"

print("Hexadecimal number:", x)
print()

d = 0
h = 1

# helyiérték meghatározása (16^(hossz-1))
i = 1
while i < len(x):
    h *= 16
    i += 1

# hex szám feldolgozása
i = 0
while i < len(x):
    sz = hex2dec(x[i])
    r = sz * h
    d += r
    h //= 16
    i += 1

print("Decimal number:", d)
print("__________")
