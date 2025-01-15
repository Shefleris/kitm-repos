def skaitomFaila():
    with open('09data.txt', 'r', encoding='utf-8') as f:
        txtList = f.readlines()
        # print(txtList)
    return txtList

def skaiciavimas():
    dalyviai = {}
    duomenys = skaitomFaila()
    for eil in duomenys:
        if eil != '\n':
            vardas, taskai = eil.split()[:2]
            taskai = int(taskai)
            if vardas in dalyviai:
                dalyviai[vardas].append(taskai)
            else:
                dalyviai[vardas] = [taskai]
    return dalyviai

def spausdinti(rez):
    with open('09rez.txt', 'a', encoding='utf-8') as f:
        for vardas, suma, maxT in rez:
            f.write(f'{vardas} suma = {suma}, didziausias = {maxT}\n')
        f.write('----------------------------------------------\n')

def spausdinti1(rez):
    with open('09rez.txt', 'a', encoding='utf-8') as f:
        for k, v in rez.items():
            print(k, *v, file=f)
        f.write('----------------------------------------------\n')

def valo():
    with open('09rez.txt', 'w', encoding='utf-8') as f:
        f.write('')


valo()
komanda = skaiciavimas()
spausdinti1(komanda)
rezultatas = [(v, sum(t), max(t)) for v, t in komanda.items()]
spausdinti(rezultatas)
spausdinti(sorted(rezultatas))
spausdinti(sorted(rezultatas, key=lambda e : (-e[1], -e[2])))