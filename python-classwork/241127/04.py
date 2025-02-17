from sys import getsizeof
sar = [i for i in range(1000) if i %  2 == 0]
genEx = (i for i in range(1000) if i %  2 == 0)
x = getsizeof(sar)
y = getsizeof(genEx)
print(f'sarasas --> {x}')
print(f'ne sarasas --> {y}')