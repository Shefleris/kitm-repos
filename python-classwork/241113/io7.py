def sukurti():
    with open('./1113/data07.txt', 'w') as f:
        f.write('25, 14, 84, 9, -8, 4, -6')
        f.write('25, 14, 84, 9, -8, 4, -6')

def nuskaito():
    with open('./1113/data07.txt','r') as f:
        eil1 = f.readline()
        eil2 = f.readline()
        return (eil1, eil2)


sukurti()
viskas = nuskaito()
print(viskas)

sk = []
for i in viskas:
    txt = i.split(', ')
    eilSk = [int(j) for j in txt]
    sk.append(eilSk)
print(eilSk)