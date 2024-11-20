# negalima naudoti set ir in

with open('./1120/01Metai.txt', 'r', encoding='utf-8') as f:
    viskas = f.read()
    # print(viskas)
    f.write(viskas)
    viskas = viskas.upper()
    simboliai = set(viskas)
    for i in simboliai:
        print(f'{i} simboliu panaudota {viskas.count(i)}')
print(simboliai)