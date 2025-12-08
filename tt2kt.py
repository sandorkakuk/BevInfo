# tizedestört átalakítása kettedestörtté

x = 0.6875

print("A törtszám:", x)
print()

maxi = 50
s = ""

i = 1
while x > 0 and i <= maxi:
    x *= 2
    if x < 1:
        print("   egész rész: 0,", end="")
        s += "0"
    else:
        print("   egész rész: 1,", end="")
        s += "1"
        x -= 1
    print("   törtrész:", x)
    if i % 4 == 0:
        print(".....", i, ". ciklus .....")
        s += " "
    i += 1

print()
print("A tört (első", maxi, "kettedesjegy): 0." + s)
print("__________")
