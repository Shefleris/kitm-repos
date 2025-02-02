class Robotas:
    # ratoDydis = 4
    def __init__(self, name=None, age=None, enable=None):
        self.name = name
        self.age = age
        self.enable = enable
        self.getStartRobot()

    def getStartRobot(self):
        print(f'Vardas {self.name}')

    def setData(self, name=None, age=None, enable=None):
        if age< 0:
            raise ValueError('AmŽius neigiamas nagali buti')
        
        self.name = name
        self.age = age
        self.enable = enable
    
    def getData(self):
        print(f'Vardas {self.name}')
        
dulkiuSurblys = Robotas('Xiomi', 5, False)
languValytuvas = Robotas()

print(dulkiuSurblys.__dict__)