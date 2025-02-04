def skaityti():
    with open('11data.txt', 'r', encoding='utf-8') as f:
        txtList = f.readlines()
        veikejai = {}
        for eilute in txtList:
            vardas = eilute[:20].strip()
            likusiEil = eilute[20:].strip()
            veikejai[vardas] = [int(i) for i in likusiEil.split()]
        return veikejai



def rezultatas():
    komanda = skaityti()
    for k, v in komanda.items():
        komanda[k].append(3*v[0] + 2*v[1] + v[2])
    return komanda

def valo():
    with open('11rez.txt', 'w', encoding='utf-8') as f:
        f.write('')

def spausdinti(komanda):
    with open('11rez.txt', 'a', encoding='utf-8') as f:
        for vardas, taskai in komanda.items():
            f.write(f'{vardas:20} surinko viso {taskai[4]}, trit.= {taskai[0]}, dvit. ={taskai[1]}, baudos = {taskai[2]}, prazangos = {taskai[3]}\n')
        f.write('-------------------------------------------------------------------------\n')


valo()
komanda = rezultatas()
spausdinti(komanda)

sortKomanda = dict(sorted(komanda.items(), key=lambda kv: (-kv[1][4], -kv[1][0], -kv[1][1], kv[1][3])))
spausdinti(sortKomanda)


sortKomanda1 = dict(sorted(komanda.items(), key=lambda kv: (-kv[1][4], -kv[1][0], -kv[1][1], kv[1][3], kv[0])))
spausdinti(sortKomanda1)
# vardas [t0, t1, t2, t3, t4]