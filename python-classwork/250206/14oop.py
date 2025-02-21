class Robotas:
    def __init__(self, name, age, force):
        self.name = name
        self.age = age
        self.force = force
    
    def atliktiUzduoti(self):
        return f'{self.name} atlieka uzduoti'

class SiurblysRobotas(Robotas):
    def __init__(self, name, age, force, siurbimoGalia, plovimas):
        super().__init__(name, age, force)
        self.siurbimoGalia = siurbimoGalia
        self.plovimas = plovimas

    def atliktiUzduoti(self):
        if self.plovimas:
            return f'{self.name} siurbia dulkes ir plauna grindis su {self.siurbimoGalia} galia'
        else:
            return f'{self.name} siurbia dulkes su {self.siurbimoGalia} galia'

class LanguRobotas(Robotas):
    def __init__(self, name, age, force, forma, pultelis):
        super().__init__(name, age, force)
        self.forma = forma
        self.pultelis = pultelis

    def atliktiUzduoti(self):
        if self.pultelis:
            return f'{self.name} plauna langus {self.forma} formos ir turi pulteli'
        else:
            return f'{self.name} plauna langus {self.forma} formos ir valdomas telefonu'

vr01 = Robotas('Kocelas', 5, '0.01kw')
sr01 = SiurblysRobotas('Stalas',7, '0.11kw', '2', True)
lr01 = LanguRobotas('Kede', 6, '0.16kw','Ratas', True)

robotai = [vr01, sr01, lr01]
for robotas in robotai:
    print(robotas.atliktiUzduoti())