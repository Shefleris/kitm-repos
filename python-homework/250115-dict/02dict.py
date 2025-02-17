def fileRead(pathname):
    with open(f'./0115-dict/2_užduotis_txt/duom3_{pathname}.txt', 'r', encoding='utf-8') as f:
        read = f.read().splitlines()
        return read

def fileWrite(data, dataType = 'dict'):
    with open(f'./0115-dict/rez02.txt', 'a', encoding='utf-8') as f:
        if dataType == 'string':
            f.write(f'{data}\n')
        else:
            for inputValue in data:
                f.write(f'{inputValue} {data[inputValue]}\n')
            f.write('-----------------------------\n')

def fileClear():
    with open(f'./0115-dict/rez02.txt', 'w', encoding='utf-8') as f:
        f.write('')

def dataProcesing(data):
    studentsGrades = {}
    for student in data:
        name, grade = student.split(' ')
        studentsGrades[name] = float(grade)
    return studentsGrades

def sortByGrade(data):
    sortedNames = dict(sorted(data.items(), key=lambda inputItem: (-inputItem[1], inputItem)))
    return sortedNames

class SchoolClass:
    def __init__(self, data):
        self.data = data
        self.average = 0
        self.aboveAvg = {}

    def calcAverage(self):
        studentCount = len(self.data)
        summed = sum(self.data.values())
        self.average = summed/studentCount
        return self
    
    def getAboveAvg(self):
        self.calcAverage()
        [self.aboveAvg.update({student: self.data[student]}) for student in self.data if self.data[student] > self.average]
        return self

def getClassBest(className):
    processedData = dataProcesing(fileRead(className))
    students = SchoolClass(processedData)
    students.getAboveAvg()
    sortedBest = sortByGrade(students.aboveAvg)
    return sortedBest

if __name__ == "__main__":
    fileClear()
    classNameList = ['1', '2', '3', '4']
    bestStudents = {}
    for className in classNameList:
        students = getClassBest(className)
        [bestStudents.update({student:students[student]}) for student in students]
        fileWrite(f'Klasė {className}:', 'string')
        fileWrite(students)
    schoolBest = SchoolClass(bestStudents)
    schoolBest.getAboveAvg()
    bestSorted = sortByGrade(schoolBest.aboveAvg)
    fileWrite('Rezultatas:', 'string')
    fileWrite(bestSorted)
