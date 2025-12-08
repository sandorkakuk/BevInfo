# racionális törtszám átalakítása kettedestörtté (1. verzió)
# feltétel: az átalakítandó törtszám pozitív és 1-nél kisebb (x < y)

x, y = 5, 7

print("A törtszám:", f"{x}/{y}")
print()

maxi = 50
s = ""

i = 1
while x > 0 and i <= maxi:
    if 2 * x < y:
        print("   egész rész: 0,", end="")
        s += "0"
        x = 2 * x
    else:
        print("   egész rész: 1,", end="")
        s += "1"
        x = 2 * x - y
    print("   törtrész:", f"{x}/{y}")
    if i % 4 == 0:
        print(".....", i, ". ciklus .....")
        s += " "
    i += 1

print()
print(f"A tört (első {maxi} kettedesjegy): 0.{s}")
print("__________")
