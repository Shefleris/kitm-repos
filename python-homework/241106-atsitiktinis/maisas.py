import random

def vartotojoEjimas(likusiuAkmenuSk):
    print('')
    print('Pasirinkite kiek akmenų norite traukti nuo 1 iki 3')
    vartotojoSk = int(input('input=...'))
    while vartotojoSk not in [1,2,3] or vartotojoSk > likusiuAkmenuSk:
        print('Negalite paiimti tiek akmenų')
        print('Iveskite kiek akmenų norite paimti')
        vartotojoSk = int(input('input=...'))
    return vartotojoSk


def kompiuterioEjimas(likusiuAkmenuSk):
    print('')
    kompiuterioSk = int(random.randint(1, 3))
    while kompiuterioSk not in [1,2,3] or kompiuterioSk > likusiuAkmenuSk:
        kompiuterioSk = int(random.randint(1, 3))
    return kompiuterioSk


def pranestiEjima(zaidejas, akmenuSk, likusiuAkmenuSk):
    if akmenuSk == 1:
        print(str(zaidejas) + ' istraukė ' + str(akmenuSk) + ' akmenį. '+'Liko '+str(likusiuAkmenuSk))
    else:
        print(str(zaidejas) + ' istraukė ' + str(akmenuSk) + ' akmenis. '+'Liko '+str(likusiuAkmenuSk))

def naujasZaidimas():
    ejimoNr = 1
    return ejimoNr

def pranestiPabaiga(zaidejas):
    print('................')
    if (zaidejas == 'Žmogus'):
        print('Sveikiname jūs laimėjote žaidimą')
    else:
        print('Jūs pralaimėjote žaidimą')

def akmenuMaisasZaidimas():
    pradinisAkmenuSk = int(random.randint(15, 30))
    likusiuAkmenuSk = pradinisAkmenuSk
    kartoti= 'T'
    while kartoti in ('T','Taip','t','taip'):
        ejimoNr = 1
        zaidejas = 'Žmogus'
        while likusiuAkmenuSk>0:
            if (zaidejas=='Žmogus'):
                vartotojasTrauke = vartotojoEjimas(likusiuAkmenuSk)
                likusiuAkmenuSk -= vartotojasTrauke
                pranestiEjima(zaidejas, vartotojasTrauke, likusiuAkmenuSk)
                if (likusiuAkmenuSk != 0):
                    zaidejas = 'Kompiuteris'
            else:
                kompiuterisTrauke = kompiuterioEjimas(likusiuAkmenuSk)
                likusiuAkmenuSk -= kompiuterisTrauke
                pranestiEjima(zaidejas, kompiuterisTrauke, likusiuAkmenuSk)
                if (likusiuAkmenuSk != 0):
                    zaidejas = 'Žmogus'
                    ejimoNr += 1
        pranestiPabaiga(zaidejas)
        print('Ar norite kartoti žaidimą?')
        kartoti = input('input=...')

akmenuMaisasZaidimas()