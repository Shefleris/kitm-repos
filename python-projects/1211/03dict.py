autoGeras={
    'Marke' : 'Opel',
    'Kaina' : 2500,
    'Turis' : 1.4,
    'Dauztas' :False
}

autoBlogas={
    'Turis' : 1.4,
    'Kaina' : 2500,
    'Dauztas' :False,
    'Marke' : 'Opel'
}

print(autoGeras == autoBlogas)
print(id(autoGeras), id(autoBlogas))

daugiauInfo={
    'Rida':254000,
    'Spalva':'Kibiro',
    'Kaina' : 3500
}

autoGeras.update(daugiauInfo)
print(autoGeras)

naujasAuto = daugiauInfo | autoBlogas
print(naujasAuto)

print(naujasAuto)
print(naujasAuto.values())
print(naujasAuto.keys())
reiksmes = list(naujasAuto.keys())
print(reiksmes)