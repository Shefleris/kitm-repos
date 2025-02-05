
prekes = {
    'Duona':1.25,
    'Zuvis': 7.25,
    # 'Vanduo' : [10, 8, 14, 25, 41],
    'Alus' : 1.23,
    'Mesa' : 20.12,
    'Alus': 2.25
}

print('Duona' not in prekes)

kopijaPrekes = prekes.copy()

print(id(prekes), id(kopijaPrekes))
# prekes['Vanduo'][0] = 10000
print(prekes)
print(kopijaPrekes)
print(prekes.items())

for k, v in prekes.items():
    print(f'Prekes "{k}" kaina yra {v} eur.')

print(len(prekes))

prekes.setdefault('Pica')
print(prekes) 

