with open('./0115/02-data.txt', 'r', encoding='utf-8') as f:
    kiekGr = int(f.readline())
    duomenys = {}
    for gr in range(kiekGr):
        kiekNar = int(f.readline())
        for nar in range(kiekNar):
            line = f.readline()
            vardas = line[:20].strip()
            likusiEilute = line[20:].strip()
            duomenys[vardas] = [int(i) for i in likusiEilute.split()]
            duomenys[vardas].append(gr+1)
    print(duomenys)