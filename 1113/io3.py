# w, r, a
with open('1113/data03.txt', 'w', encoding='UTF-8') as f:
    f.write('Pirmas kartas su byla\n')
    a = 5
    f.write(str(a))
    f.write(f'a={a}')
    f.write('Kitas')
    f.write(f'ĄČĘĖĮŠŲŪ()')
    print(f.closed)