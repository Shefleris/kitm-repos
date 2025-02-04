class Robotas:
    def __init__(self, name):
        self.name = name
    
    @classmethod
    def kitoksVardas(cls, kitaDalis):
        return cls(name=f'Robotas_{kitaDalis}')

robot = Robotas.kitoksVardas("123")
print(robot.name) 
