# decimális számjegy átalakítása 4 bites bináris számmá

x = 3

print("Decimális számjegy:", x)
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
    q = x // 2   # egész osztás
    b = str(m) + b
    x = q

i = len(b)
while i < 4:
    b = "0" + b   # vezető nullák hozzáadása
    i += 1

print("Bináris szám:", b)
print("__________")
