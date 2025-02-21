class Robotas:
    def __init__(self, name, age, enable, wheels, force):
        self.__name = name
        self.__age = age
        self.__enable = enable
        self.__wheels = wheels
        self.__force = force

    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, newValue):
        if not isinstance(newValue, str):
            raise ValueError('New value is not string')
        self.__name = newValue
    
    @property
    def age(self):
        return self.__age
    
    @age.setter
    def age(self, newValue):
        if not isinstance(newValue, int) or newValue < 0:
            raise ValueError('New value is not a number or is negative')
        self.__age = newValue

    @property
    def enable(self):
        return self.__enable
    
    @enable.setter
    def enable(self, newValue):
        if not isinstance(newValue, bool):
            raise ValueError('New value is not a boolean')
        self.__enable = newValue

    @property
    def wheels(self):
        return self.__wheels
    
    @wheels.setter
    def wheels(self, newValue):
        if not isinstance(newValue, int) or newValue < 0:
             raise ValueError('New value is not a number or is negative')
        self.__wheels = newValue

    @property
    def force(self):
        return self.__force
    
    @force.setter
    def force(self, newValue):
        if not isinstance(newValue, str) or not newValue.endswith('kw'):
             raise ValueError('New value is not a string or doesn\'t end with kw')
        self.__force = newValue

    def __str__(self):
        return f'Robotas {self.name}:\n\t1. Amzius:{self.age}; \n\t2. Ar ijungtas? {self.enable};\n\t3. Galia:{self.force}.'

dulkiuSiurblys = Robotas('Xiomi', 5, True, 0, '0.47kw')
# print(vars(dulkiuSiurblys))
# dulkiuSiurblys.name = "Dessault"
# dulkiuSiurblys.enable = False
# dulkiuSiurblys.age = 8
# dulkiuSiurblys.wheels = 6
# dulkiuSiurblys.force = '0.6kw'
# print(vars(dulkiuSiurblys))
print(dulkiuSiurblys)