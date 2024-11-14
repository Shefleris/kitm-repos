def skaityti():
    with open('./1113/data09.txt', 'r') as f:
        txt = []
        while True:
            eil = f.readline()
            if eil:
                txt.append(eil)
            else:
                break
        return txt

viskas = skaityti()
print(viskas)

sk = []
for eil in viskas:
    # eilSk = [int(x) for x in eil.split(' ') if x !='\n']
    eilSk = [int(x) for x in eil.split()]
    if len(eilSk) != 0:
        sk.append(eilSk)
print(sk)