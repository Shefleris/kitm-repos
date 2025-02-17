# _protected #private 

class Robotas:
    def __init__(self, name):
        self.name = name
        self._baterija = 100
        self.__slaptazodis = '12345'
    
    @property
    def baterija(self):
        """geteris baterijai"""
        return self._baterija

    @baterija.setter
    def baterija(self, value):
        """Baterijos setteris"""
        if 0 <= value <=100:
            self._baterija = value
        else:
            print('Klaida...')
    
    @property
    def slaptazodis(self):
        """slaptazodis"""
        return self.__slaptazodis
    
class siurblysRobotas(Robotas):
    def __init__(self, name, siurbimoGalia):
        super().__init__(name)
        self.siurbimoGalia = siurbimoGalia

    def info(self):
        return f'{self.name} (baterija: {self.baterija}%, siurbimo galie:{self.siurbimoGalia})'

    def gautiSlaptazodi(self):
        try:
            print(f'Slaptazodis = {self.__slaptazodis}')
        except AttributeError as ex:
            print(f'Klaida: {ex}')


sr1 = siurblysRobotas("Xiomi", '1kw')
print(sr1.info())

sr1.baterija = 55
print(sr1.info())
print(sr1.slaptazodis)

sr1.gautiSlaptazodi()