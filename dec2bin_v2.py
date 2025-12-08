# decimális szám átalakítása bináris számmá (ver. 2.0)

x = 314

print("Decimális szám:", x)
print()

b = ""
q = 0
m = 0

while x > 0:
    if x % 2 == 1:
        m = 1
        x = x - 1
    else:
        m = 0
    q = x / 2
    print("   Hányados:", q, ", maradék:", m)
    b = str(m) + b
    x = q

print()
print("Bináris szám:", b)
print("__________")
