# bináris szám átalakítása hexadecimális számmá

def dec2hex(sz):
    if sz == 10:
        return "A"
    elif sz == 11:
        return "B"
    elif sz == 12:
        return "C"
    elif sz == 13:
        return "D"
    elif sz == 14:
        return "E"
    elif sz == 15:
        return "F"
    else:
        return str(sz)

x = "10101101"

# vezető nullák hozzáadása, hogy a hossz 4 többszöröse legyen
while len(x) % 4 != 0:
    x = "0" + x

k = len(x) - 1
t = ""  # végeredmény

s = ""
h = 0
helyiertek = 1

for i in range(len(x)):
    s = x[k] + s
    if x[k] == "1":
        h += helyiertek
    helyiertek *= 2
    k -= 1
    #print (k)

    if i % 4 == 3:
        print(f"    {s} = {h} = {dec2hex(h)}")
        t = dec2hex(h) + t
        print (t)
        s = ""
        h = 0
        helyiertek = 1

print()
print(f"{x} = {t}")
print("____________")
