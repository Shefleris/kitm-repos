def skaityti():
    with open('./1113/data09.txt', 'r') as f:
        txt = []
        for eil in f:
            txt.append(eil)
        return txt

viskas = skaityti()
print(viskas)

sk = []
for eil in viskas:
    eilSk = [int(x) for x in eil.split()]
    if len(eilSk) != 0:
        sk.append(eilSk)
print(sk)