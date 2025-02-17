class Robotas:
    name = None
    age = None
    enable = None

dulkiuSurblys = Robotas()
print(type(dulkiuSurblys))

print(dulkiuSurblys)
print(dulkiuSurblys.__dict__)
print(Robotas.__dict__)

dulkiuSurblys.name = "Xiaumi"
dulkiuSurblys.age = 5
dulkiuSurblys.color = "Black"
print(dulkiuSurblys.__dict__)

# print(dulkiuSurblys.name)
# print(dulkiuSurblys.nera)
ats = "deja nera"
print(getattr(dulkiuSurblys,' nera', ats))
print(getattr(dulkiuSurblys,' name', ats))

setattr(dulkiuSurblys,'ratai', 4)
print(dulkiuSurblys.__dict__)

del dulkiuSurblys.age

print(dulkiuSurblys.__dict__)
# delattr(dulkiuSurblys, 'age')

if hasattr(dulkiuSurblys, 'name'):
    print("Valio yra")
else :
    print('Valio nėra')

if hasattr(dulkiuSurblys, ''):
    print("Valio yra")
else :
    print('Valio nėra')