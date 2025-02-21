class Robotas:
    def __init__(self, name, age, enable, wheels, force):
        self.name = name
        self.age = age
        self.enable = enable
        self.wheels = wheels
        self.force = force

    @classmethod
    def sukarpyk(cls, eilute):
        name, age, enable, wheels, force = eilute.split(', ')
        age = int(age)
        wheels = int(wheels)
        enable = enable.lower() == True
        return cls(name, age, enable, wheels, force)
    
    @staticmethod
    def arJuda(wheels, force):
        return wheels >= 1 and float(force[:2]) > 0

dulkiuSiurblys = Robotas.sukarpyk('Xiomi, 5, True, 0, 0.47kw')
print(dulkiuSiurblys.__dict__)
print(vars(dulkiuSiurblys))
arGaliJudeti = Robotas.arJuda(dulkiuSiurblys.wheels, dulkiuSiurblys.force)
print(f'Ar robotas {dulkiuSiurblys.name} gali judėti? {arGaliJudeti}')