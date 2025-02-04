# Užduoties sprendimas tas pats kaip ir antros užduoties. Tik abecėlė skiriasi
def readFile():
    with open('1226-str-tipas/duom1.txt', 'r', encoding='utf-8') as f:
        lineList = f.read().splitlines()
        return lineList

def writeFile(textToWrite):
    with open('1226-str-tipas/rez1.txt', 'w', encoding='utf-8') as f:
        f.writelines(textToWrite)

def atbashLetter(letter):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    reversedAlpha = alphabet[::-1]
    if letter.islower() and letter in alphabet:
        return reversedAlpha[alphabet.index(letter)]
    elif letter.isupper() and letter.lower() in alphabet:
        encodedLetter = reversedAlpha[alphabet.index(letter.lower())]
        return encodedLetter.upper()
    else:
        return letter

def atbashEncoder(stringToEncode):
    encodedString = ""
    for letter in stringToEncode:
        encodedString += atbashLetter(letter)
    return encodedString

def encodeFile():
    encodedList = []
    lineList = readFile()
    for line in lineList:
        encodedList.append(atbashEncoder(line)+'\n')
    writeFile(encodedList)

encodeFile()