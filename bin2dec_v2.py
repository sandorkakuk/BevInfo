# bináris szám átalakítása decimális számmá (ver 2.0)

x = "1101"

print("Bináris szám:", x)
print()

d = 0
helyiertek = 1

# helyiérték meghatározása (2^(hossz-1))
i = 1
while i < len(x):
    helyiertek *= 2
    i += 1

# bináris szám feldolgozása
i = 0
while i < len(x):
    sz = 1 if x[i] == "1" else 0
    r = sz * helyiertek
    d += r
    helyiertek //= 2
    i += 1

print("Decimális szám:", d)
print("__________")
