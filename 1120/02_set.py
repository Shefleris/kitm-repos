#  aibės

aibeA = {5, 6}
print(type(aibeA))

aibeB = set()
print(type(aibeB))

aibeA.add(1)
print(aibeA)
# print(aibeA[1]) negalimas aibės elementai nėra indeksuojami
listA = (5,6, 8, 9, 7, 2, 3, 4, 8, 9, 5)
listU = []
for i in listA:
    if not (i in listU):
        listU.append(i)
print(listU)

listU1 = list(set(listA))
print(listU1)

for i in aibeA:
    print(i, end =', ')

# for i in range(len(aibeA)): // negalima
#     print(aibeA[i])

print()
print(len(aibeA))