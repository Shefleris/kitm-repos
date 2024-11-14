import random


def vartotojoEjimas():
    print("Pasirinkite kiek akmenų norite traukti nuo 1 iki 3")
    vartotojoSk = int(input('input=...'))
    while vartotojoSk not in [1,2,3] or vartotojoSk > likusiuAkmenuSk:
        print("Negalite paiimti tiek akmenų")
        print('Iveskite kiek akmenų norite paimti')
        vartotojoSk = int(input('input=...'))
    return vartotojoSk


def KompiuterioEjimas():
    kompiuterioSk = int(random.randint(1, 3))
    return kompiuterioSk


def pranestiEjima(akmenuSk, zaidejas):
    if akmenuSk == 1:
        print(str(zaidejas) + 'istraukė' + str(akmenuSk) + 'akmenį')
    else:
        print(str(zaidejas) + 'istraukė' + str(akmenuSk) + 'akmenis')


def akmenuMaisasZaidimas():
    radinisAkmenuSk = int(random.randint(15, 30))
    likusiuAkmenuSk = pradinisAkmenuSk

    while True:

        kompiuterioSk = int(random.randint(1, 3))

