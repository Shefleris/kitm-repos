classStudent = __import__('01-class-student')
Studentas = classStudent.Studentas

class Universitetas:
    def __init__(self, studentai=[], kursai=[]):
        self._studentai=studentai
        self._kursai=kursai
    
    @property
    def studentai(self):
        return self._studentai
    
    @studentai.setter
    def studentai(self, naujiStudentai):
        self._studentai = naujiStudentai

    @property
    def kursai(self):
        return self._kursai
    
    @kursai.setter
    def kursai(self, naujiKursai):
        self._kursai = naujiKursai

    def prideti_studenta(self, naujasStudentas):
        if not self.ar_studentas_teisingas(naujasStudentas):
            raise ValueError("Duomenys nepriklauso studento klasei")
        self.studentai.append(naujasStudentas)

    def prideti_kursa(self, naujasKursas):
        self.kursai.append(naujasKursas)

    def priskirti_studenta_kursui(self, studentoVardas, kursoPavadinimas):
        def pridetiKursa(student):
            if student.vardas == studentoVardas:
                if hasattr(student, 'kursai'):
                    student.kursai.append(kursoPavadinimas)
                else:
                    student.kursai = [kursoPavadinimas]
            return student
        self.studentai = [pridetiKursa(student) for student in self.studentai]
        

    def gauti_studentus_pagal_kursa(self, kursoPavadinimas):
        return [student.vardas for student in self.studentai if hasattr(student,'kursai') and kursoPavadinimas in student.kursai]

    def gauti_geriausius_studentus(self):
        return [student.vardas for student in self.studentai if student.vidurkis() > 9]

    @staticmethod
    def ar_studentas_teisingas(studentas):
        return isinstance(studentas, Studentas)

if __name__ == '__main__':
    universitetas = Universitetas()
    universitetas.prideti_studenta(Studentas("Jonas",[9,10,10]))
    universitetas.prideti_studenta(Studentas("Petras",[8,7,9]))
    universitetas.prideti_kursa("Matematika")
    print(universitetas.kursai)
    print(universitetas.studentai)
    universitetas.priskirti_studenta_kursui("Petras", "Matematika")
    print(universitetas.gauti_studentus_pagal_kursa("Matematika"))
    print(universitetas.gauti_geriausius_studentus())