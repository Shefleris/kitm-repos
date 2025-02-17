class Robotas:
    def __init__(self, name=None, age=None, enable=None):
        self.name = name
        self.age = age
        self.enable = enable
    
    @classmethod
    def sukarpyk(cls, eilute):
        name, age, enable, wheels, force = eilute.split(', ')
        name = string(name)
        age = int(age)
        wheels = int(wheels)
        enable = bool(enable)
