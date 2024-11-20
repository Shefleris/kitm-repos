aibeA = {5, 6, 7, 8, 9, 5, 1, 3, 7, 11, 22, 35, 75, 2}
aibeB = {1, 4, 6, 7, 8, 13}
aibeC = {6, 7, 8}

# aibeC.remove(6)
# aibeC.discard(11)
# kaPasalinom = aibeC.pop()
# print(aibeC)

# print(aibeA.union(aibeB, aibeC))
# print(aibeA.intersection(aibeB))

# print(aibeA.difference(aibeB))
# print(aibeA.symmetric_difference(aibeB))

# print(aibeA.issubset(aibeC))
# print(aibeC.issubset(aibeA))

# print(aibeA.issuperset(aibeC))
# print(aibeC.issuperset(aibeA))

# print(aibeA.isdisjoint(aibeB))
# print(aibeA.isdisjoint(aibeC))
# print(aibeA)

# aibeA.intersection_update(aibeB)
# print(aibeA)

# aibeA.symmetric_difference_update(aibeB)
# print(aibeA)

aibeA.difference_update(aibeB)
print(aibeA)

