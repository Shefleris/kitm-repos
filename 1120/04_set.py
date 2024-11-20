import time

def fun(*args):
    sar = []
    for i in args:
        for j in i:
            if j not in i:
                sar.append(j)
    return sar

sarA = list(range(1000))
sarB = list(range(2500, 160000, 2))
sarC = list(range(1000, 300000, 3))

pradziaA = time.time()
set1 = set(sarA)
setU = set1.union(set(sarB),set(sarC))
trukmeA = time.time() - pradziaA

print(f'Su Aibem uztrukom {trukmeA}')

pradziaS = time.time()
fun(sarA, sarB, sarC)
trukmeS = time.time() - pradziaS
print(f'Su Sarasu uztrukom {trukmeS}')