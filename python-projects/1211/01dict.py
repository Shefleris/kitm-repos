sar = [1, 8, 2, True, 'Labas']
print(sar[1])

prekes = {
    'Duona':1.25,
    'Zuvis': 7.25,
    'Vanduo' : 0.65,
    'Alus' : 1.23,
    # 1 : 'Kazkas'
    'Mesa' : 20.12,
    'Alus': 2.25
}

print(prekes['Duona'])
prekes['Duona'] = prekes['Duona'] + 0.20
# print(prekes[1])

print(prekes)

komanda = dict(Tomas = 28, Stasys = 25, Linas = 29, TomasD = 54)
print(komanda)

sarKomandos = ['Petras', 'Antanas', 'Jonas', 'Rimas']
# beTasku = dict.fromkeys(sarKomandos)
beTasku = dict.fromkeys(sarKomandos, 0)
print(beTasku)

prekes['Konsevai'] = 5.84

# print(prekes['Miltai'])
preke = 'Miltai'

print(prekes.get(preke, 'Deja sios prekes neturime'))


# del prekes['Miltai']
# print(prekes)

# kazkas = prekes.pop('Alus')
# print(prekes)
# print(kazkas)

kazkas = prekes.popitem()
print(prekes)
print(kazkas)