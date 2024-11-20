#  kortedžai


kort = (5, 7, 8, 9, 7, 8, 9)
print(type(kort))

print(kort[1])
for i in kort:
    print(i+1,end=',')
print(kort)

KON = (4)
# KON = KON + 1
# kort[1]=kort[1] + 1
kort2 = 5, 8, 9, 7
print(type(kort2))
# kort = list(kort) //Nedaryti

a, b, c, d = kort2

for i in range(len(kort)):
    print(kort[i])

print(kort.count(8))
print(kort.index(5))
print(sum(kort))
print(min(kort))
print(max(kort))
list1 = sorted(kort)
print(list1)
print(kort)
print(8 in kort)

k1 = (5, 6, 7)
k2 = (6, 7, 9)
print(id(k1))
print(id(k2))
k1 = k1 + k2
print(k1)
print(id(k1))