import timeit

sar = [i for i in range(1000) if i %  2 == 0]
genEx = (i for i in range(1000) if i %  2 == 0)

print(timeit, timeit('''sar = [i for i in range(1000) if i %  2 == 0]''', number = 1000))
print(timeit, timeit('genEx = (i for i in range(1000) if i %  2 == 0)', number = 1000))