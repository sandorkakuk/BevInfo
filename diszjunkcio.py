# Diszjunkció (VAGY) igazságtáblázata

def disz(x, y):
    a = bool(x)
    b = bool(y)
    c = a or b
    return int(c)

print("A B A∨B")
print("-------")

for i in range(2):       # 0 és 1
    for j in range(2):   # 0 és 1
        k = disz(i, j)
        print(f"{i} {j}  {k}")

print("-------")
