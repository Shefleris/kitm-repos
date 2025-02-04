def fileWrite(data, fileName = "sarasas", dataType = 'dict'):
    with open(f'./0115-dict/01-{fileName}.txt', 'a', encoding='utf-8') as f:
        if dataType in ['dict', 'list', 'set']:
            for inputValue in data:
                f.write(f'{inputValue} {data[inputValue]}\n')
        else:
            f.write('----------------\n')
            f.write(f'Total = {data}€')


def fileClear(fileName = "sarasas"):
    with open(f'./0115-dict/01-{fileName}.txt', 'w', encoding='utf-8') as f:
        f.write('')

def fileRead(pathname):
    with open(f'./0115-dict/1_užduotis_txt/{pathname}.txt', 'r', encoding='utf-8') as f:
        read = f.read().splitlines()
        return read

def sortNamesByCount(data):
    sortedNames = dict(sorted(data.items(), key=lambda inputItem: (-inputItem[1], inputItem)))
    return sortedNames

class Students:
    def __init__(self, data):
        self.data = data
        self.uniqueNames = ()
        self.studentNameCount = {}

    def allUniqueNames(self):
        self.uniqueNames = set(self.data)
        return self
    
    def countNames(self):
        for name in self.uniqueNames:
            nameCount = sum(1 for student in self.data if student == name)
            self.studentNameCount[name] = nameCount
        return self

def countSchoolStudents(classList):
    names = []
    [names.extend(fileRead(studentClass)) for studentClass in classList]
    schoolClass = Students(names)
    schoolClass.allUniqueNames().countNames()
    return schoolClass.studentNameCount

def totalBill(data):
    total = 0
    billByName = {}
    for item in data:
        itemTotalCost = 0
        iteration = 0
        itemsLeft = int(data[item])
        while itemsLeft > 0:
            match iteration:
                case iteration if iteration < 3: 
                    itemTotalCost += 5
                case 3:
                    itemTotalCost += 4
                case 4:
                    itemTotalCost += 3
                case 5:
                    itemTotalCost += 2
                case iteration if iteration > 5:
                    itemTotalCost += 1
            itemsLeft -= 1
            iteration += 1
        billByName[item] = itemTotalCost
        total += itemTotalCost
    return billByName, total

if __name__ == "__main__":
    fileClear()
    fileClear("saskaita")
    classList = ['12a', '12b', '12c', '12d', '12e', '12f', '12g']
    studentList = countSchoolStudents(classList)
    sortedStudents = sortNamesByCount(studentList)
    fileWrite(sortedStudents)
    billByName, total = totalBill(sortedStudents)
    fileWrite(billByName, "saskaita")
    fileWrite(total, "saskaita", "int")