class Robotas:
    # ratoDydis = 4
    def __init__(self, name=None, age=None, enable=None):
        self.name = name
        self.age = age
        self.enable = enable
    
    def __del__(self):
        print(f'objektas {self} panaikintas')

dulkiuSurblys = Robotas('Xiomi', 5, False)
print(dulkiuSurblys.__dict__)