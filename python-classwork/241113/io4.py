def sukurti(a,b):
    with open('1113/data04.txt', 'w') as f:
        f.write(f'{a}\n{b}')

sukurti(5,8)

def skaitom():
    with open('1113/data04.txt', 'r') as f:
        # txt = f.read()
        sk1 = int(f.readline())
        sk2 = int(f.readline())
        print(sk1, sk2)
    return (sk1, sk2)

def papildom():
    with open('1113/data04.txt', 'a') as f:
        suma = a + b
        f.write(f'{a}+{b}={suma}\n')

x1, x2 = skaitom()
papildom(x1, x2)
