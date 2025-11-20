def hex2dec(hx):
    hx = hx.upper()
    if hx == "A": return 10
    elif hx == "B": return 11
    elif hx == "C": return 12
    elif hx == "D": return 13
    elif hx == "E": return 14
    elif hx == "F": return 15
    else: return int(hx)

x = "2AD"
print("A hexadecimális szám:", x)
print()

t = ""  # végeredmény

for i in range(len(x)):
    h = hex2dec(x[i])
    helyiertek = 8
    s = ""  # részeredmény

    while helyiertek >= 1:
        if h >= helyiertek:
            s += "1"
            h -= helyiertek
        else:
            s += "0"
        helyiertek /= 2

    print(f"    {x[i]} = {hex2dec(x[i])} = {s}")
    if i > 0:
        t += " "
    t += s

print()
print(f"{x} bináris alakja: {t}")
print("____________")
