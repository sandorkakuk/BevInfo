#hex2dec
x="1A2"
dec=0
a=0

for i in range (len(x)):
    h=len(x)-1-i
    print ("A szorzat: ", x[i])
    print ("hatvány",h)

    if x[i]=="A" or "a":
        dec=10
    elif x[i]=="B" or "b":
        dec=11
    elif x[i]=="C" or "c":
        dec=12
    elif x[i]=="D" or "d":
        dec=13
    elif x[i]=="E" or "e":
        dec=14
    elif x[i]=="F" or "f":
        dec=15
    else:
        dec=x[i]
    
    a+=dec*(16*h)
    print ("A hatvány összege:" , 16**h)
#    print (a)

print ("A decimális szám értéke:", a)
