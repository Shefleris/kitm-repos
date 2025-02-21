class Preke:
    def __init__(self, pavadinimas, kaina, kiekis):
        self.pavadinimas = pavadinimas
        self.kaina = kaina
        self.kiekis = kiekis
    
    @property
    def pavadinimas(self):
        return self._pavadinimas
    
    @pavadinimas.setter
    def pavadinimas(self, newValue):
        if newValue is None or not isinstance(newValue, str):
            raise ValueError('Pavadinimas negali buti tuscias, taip pat turi buti str')
        self._pavadinimas = newValue

    @property
    def kaina(self):
        return self._kaina
    
    @kaina.setter
    def kaina(self, newValue):
        self.ar_kaina_teisinga(newValue)
        self._kaina = newValue
    
    @property
    def kiekis(self):
        return self._kiekis
    
    @kiekis.setter
    def kiekis(self, newValue):
        if newValue < 0:
            raise ValueError("kiekis negali buti neigiamas")
        self._kiekis = newValue

    @staticmethod
    def ar_kaina_teisinga(newValue):
        if newValue < 0:
            raise ValueError("Kaina negali buti neigiama")

    def bendra_kaina(self):
        return self.kaina*self.kiekis

preke = Preke("Obuolys", 1.2, 10)
print(preke.bendra_kaina())
preke.kaina = -5