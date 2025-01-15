import copy
prekes = {
    'Duona':1.25,
    'Zuvis': 7.25,
    'Vanduo' : [10, 8, 14, 25, 41],
    'Alus' : 1.23,
    'Mesa' : 20.12,
    'Alus': 2.25
}

# kopijaPrekes = prekes.copy()
# kopijaPrekes = dict(prekes)
kopijaPrekes = copy.deepcopy(prekes)

print(id(prekes), id(kopijaPrekes))
prekes['Vanduo'][0] = 10000
print(prekes)
print(kopijaPrekes)