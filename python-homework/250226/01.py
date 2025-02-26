import pathlib

def writeIO(data, writeMode='a'):
    # gauna kelia iki folderio kuriame yra paleistas python failas
    currentDir = pathlib.Path(__file__).resolve().parent
    currentDir = str(currentDir)+"/res_masyvas.txt"
    with open(currentDir, writeMode, encoding='utf-8') as f:
        data = [str(row) + '\n' for row in data]
        f.writelines(data)
        f.write('\n')

class Matrix:
    def __init__(self, matrixList):
        self.matrixList = matrixList

    @property
    def matrixList(self):
        return self._matrixList

    @matrixList.setter
    def matrixList(self, matrixList):
        if not isinstance(matrixList, list) or not all((isinstance(row, list) for row in matrixList)):
            raise ValueError("Inputed data is not a matrix")
        self._matrixList = matrixList

    # Horizontalus masyvo apvertimas
    def flipX(self):
        self.matrixList = [list(reversed(line)) for line in self.matrixList]

    # Vertikalus masyvo apvertimas
    def flipY(self):
        self.matrixList = list(reversed(self.matrixList))
    
    # Apkeicia stulpelius su eilutemis
    def transposeCollumnRow(self):
        self.matrixList = [[self.matrixList[rowNr][collumnNr] for rowNr in range(len(self.matrixList))] for collumnNr in range(len(self.matrixList[0]))]

    # Pasuka masyva 90 laipsniu pagal laikrodzio rodykle
    def rotateClockWise(self):
        self.transposeCollumnRow()
        self.flipX()

if __name__ == "__main__":
    arrayM = Matrix([[1,2,3],[4,5,6],[7,8,9]])
    writeIO(arrayM.matrixList, 'w')
    print(arrayM.matrixList)
    arrayM.rotateClockWise()
    print(arrayM.matrixList)
    writeIO(arrayM.matrixList)