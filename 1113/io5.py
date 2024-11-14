def viskas(a,b):
    with open('1113/data05.txt', 'r+') as f:
        f.seek(0)
        f.write(f'{a}\n{b}\n')
        sk1 = int(f.readline())
        sk2 = int(f.readline())
        suma = a + b
        f.write(f'{a}+{b}={suma}')

viskas(5, 8)