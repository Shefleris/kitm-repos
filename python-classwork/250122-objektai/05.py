class Robotas:
    def startRobot(self, name, age, enable):
        self.name = name
        self.age = age
        self.enable = enable

    # def getStartRobot(self):
    #     return self.val, self.mi

dulkiuSurblys = Robotas()
languValytuvas = Robotas()

dulkiuSurblys.startRobot('Xiomi', 5, False)
print(dulkiuSurblys.__dict__)