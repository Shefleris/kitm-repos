class Robotas:
    '''Dokumentacija'''
    name = None
    age = None
    enable = None

    def startRobot(self, val, mi):
        self.val = val
        self.mi = mi

    def getStartRobot(self):
        return self.val, self.mi

dulkiuSurblys = Robotas()
languValytuvas = Robotas()

dulkiuSurblys.startRobot(12, 15)
languValytuvas.startRobot(4, 30)
print(languValytuvas.getStartRobot())