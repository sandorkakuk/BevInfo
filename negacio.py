# Negáció igazságtáblázata

def neg(x):
    a = bool(x)
    c = not a
    return int(c)

print("A  ⌝A")
print("-----")

for i in range(2):   # 0 és 1
    k = neg(i)
    print(f"{i}  {k}")

print("-----")
