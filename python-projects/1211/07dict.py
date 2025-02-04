draugai = {
    'Žygis': 37,
    'Jonas': 45,
    'Algis' : 28,
    'Ona' : 38,
    'Ana' : 38,
    'Greta' : 25,
    'Aidas': 28
}

print(draugai.items())
print(sorted(draugai))
pagalVarda = dict(sorted(draugai.items()))
print(pagalVarda)
pagalAmziu = dict(sorted(draugai.items(), key= lambda kv:kv[1]))
print(pagalAmziu)
pagalAmziuIrAbc = dict(sorted(draugai.items(), key= lambda kv:(kv[1], kv[0])))
print(pagalAmziuIrAbc)