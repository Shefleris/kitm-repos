
def writeFile(message='', filepath = "./rez.txt", mode='a+'):
    with open(f'{filepath}', f'{mode}', encoding='utf-8') as f:
        f.writelines(message)

def readFile(nr):
    try:
        with open(f'./0202-klaidos/klaidu-taisymas/duom{nr}.txt', 'r', encoding='utf-8')  as f:
            return f.read().splitlines()
    except FileNotFoundError as err:
        print(f'duom{nr}.txt file doesn\'t exist')
        errorLogFilePath = './0202-klaidos/klaidos.txt'
        writeFile('............................\n', errorLogFilePath)
        writeFile(f'Byla duom{nr}.txt nerasta \n', errorLogFilePath)
        writeFile('............................\n', errorLogFilePath)

class ParseData:
    def __init__(self, data, fileNr):
        self.data = data
        self.fileNr = fileNr

    def parseLines(self):
            self.data = [item.split() for item in self.data]
            return self

    def convertToNr(self):
        newDatalist = []
        for index, value in enumerate(self.data):
            newLine = []
            for item in value:
                try:
                    valueAsDigit = int(item)
                    newLine.append(valueAsDigit)
                except Exception as err:
                    writeFile(f'Byla duom{self.fileNr}.txt {index+1} eilutė elementas {item} nėra sveikasis skaičius \n', "./0202-klaidos/klaidos.txt")
            if len(newLine) != 0:
                newDatalist.append(newLine) 
        self.data = newDatalist
        return self

    def flatten(self):
        newList = sum(self.data, [])
        self.data = newList
        return self

class ProccessData:
    def __init__(self, dataList):
        self.dataList = dataList

    def countDigits(self):
        self.digitCount = len(self.dataList)
        return self
    
    def sumDigits(self):
        self.digitSum = sum(item for item in self.dataList)
        return self

    def findHighest(self):
        self.digitHighest = max(self.dataList)
        return self
    
    def findLowest(self):
        self.digitLowest = min(self.dataList)
        return self



if __name__ == "__main__":
    writeFile('','./0202-klaidos/klaidos.txt','w')
    writeFile('','./0202-klaidos/rez.txt','w')
    for fileNr in range(1,11):
        try:
            readDatalist = readFile(fileNr)
            parsedData = ParseData(readDatalist, fileNr).parseLines().convertToNr().flatten().data
            proccessedData = ProccessData(parsedData).sumDigits().countDigits().findHighest().findLowest()
            writeFile(f'Byla duom{fileNr}.txt skaiČiu suma {proccessedData.digitSum} bylos skaičiu kiekis {proccessedData.digitCount}, didžiausias skaičius {proccessedData.digitHighest}, mažiausias skaičius {proccessedData.digitLowest}\n', './0202-klaidos/rez.txt','a+')
        except Exception as err:
            print(err)
            continue

