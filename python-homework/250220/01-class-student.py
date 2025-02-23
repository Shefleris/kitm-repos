class Studentas:
    def __init__(self, vardas, pazymiai):
        self.vardas = vardas
        self.pazymiai = pazymiai

    @property
    def vardas(self):
        return self._vardas
    
    @vardas.setter
    def vardas(self, newValue):
        if newValue is None or not isinstance(newValue, str):
            raise ValueError("Vardas turi buti str")
        self._vardas = newValue

    @property
    def pazymiai(self):
        return self._pazymiai
    
    @pazymiai.setter
    def pazymiai(self, newValues):
        if not isinstance(newValues, list) or not all(self.ar_pazymys_teisingas(newValue) for newValue in newValues):
            raise ValueError('Pazymiai turi buti saraše ir negali buti neigiami ar didesni negu 10')
        self._pazymiai = newValues

    @staticmethod
    def ar_pazymys_teisingas(value):
        if 0 <= value <= 10:
            return True
        return False

    def vidurkis(self):
        return sum(self._pazymiai)/len(self._pazymiai)


if __name__ == '__main__':
    studentas = Studentas("Jonas", [8, 9, 7])
    print(studentas.vardas)
    print(studentas.vidurkis())
    studentas.pazymiai = [10, 9, 11]