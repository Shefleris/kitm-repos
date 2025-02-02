# Dekoratoriai

import time

def kiekLaiko(func):
    def pradziaPabaiga(*args, **kwargs):
        pradzia = time.time()
        rez = func(*args, **kwargs)
        pabaiga = time.time()
        print(f'funkcijos {func.__name__} vykdymo trukmė {pabaiga-pradzia}')
        return rez
    return pradziaPabaiga

def musuFunkcija(n):
    suma = 0
    for i in range(n):
        suma+=i
    return suma


print(musuFunkcija(10000))