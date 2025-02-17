def readFile():
    with open('1226-str-tipas/duom4.txt', 'r', encoding='utf-8') as f:
        lineList = f.read().splitlines()
        return lineList

def writeFile(textToWrite):
    with open('1226-str-tipas/rez4.txt', 'w', encoding='utf-8') as f:
        f.writelines(textToWrite)

class PasswordChecker:
    def __init__(self, word):
        self.word = word
        self.evaluation = []
    
    def checkLength(self):
        if len(self.word)<12:
            self.evaluation.append('Slaptažodis per trumpas.')
        return self

    def checkDigitCount(self):
        digits = sum(1 for simbolis in self.word if simbolis.isdigit())
        if digits < 2:
            self.evaluation.append("Trūksta " + str(2 - digits) + " skaičių.")
        return self

    def checkLowerCaseCount(self):
        lowerCount = sum(1 for simbolis in self.word if simbolis.islower())
        if lowerCount < 2:
            self.evaluation.append("Trūksta " + str(2 - lowerCount) + " mažūjų raidžių.")
        return self

    def checkUpperCaseCount(self):
        upperCount = sum(1 for simbolis in self.word if simbolis.isupper())
        if upperCount < 2:
            self.evaluation.append("Trūksta " + str(2 - upperCount) + " didžiūju raidžių.")
        return self

    def checkSpecialSimbolCount(self):
        specialCharactersList = "!@#$%^&*()_-=+,.<>/?[{]}|~:;-"
        simbolsCount = sum(1 for simbolis in self.word if simbolis in specialCharactersList)
        if simbolsCount < 2:
            self.evaluation.append("Trūksta " + str(2 - simbolsCount) + " specialių simbolio/ų")
        return self
    
    def checkEvaluation(self):
        if len(self.evaluation) == 0:
            self.evaluation.append("Tinkamas.")
        else:
            self.evaluation.insert(0, "Netinkamas.")
        return self

def FullCheckAndPrint():
    passwordList = readFile()
    listEvaluation = []
    for item in passwordList:
        password = PasswordChecker(item)
        password.checkLength().checkDigitCount().checkLowerCaseCount().checkUpperCaseCount().checkSpecialSimbolCount().checkEvaluation()
        listEvaluation.append(''.join(map(str, password.evaluation))+'\n')
    writeFile(listEvaluation)


FullCheckAndPrint()