aszam=3
bszam=4
cszam=5

if aszam + bszam >= cszam and aszam + cszam >= bszam and bszam + cszam >= aszam:
    print ("szerkesthető")
    if aszam == bszam or aszam==cszam or bszam==cszam:
        print ("egyenló szárú háromszög")
    elif aszam*aszam+bszam*bszam==cszam*cszam:
        print ("derékszögű háromszög")
    else:
        print ("általános háromszög")
else:
    print ("nem szerkeszthető")