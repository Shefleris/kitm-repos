# nebaigtas

def readFile ():
    with open('0108-uzduotis/duom1.txt', 'r', encoding='utf-8') as f:
        lines = f.read().splitlines()
        return lines

def distributeIntoGroups(data):
    groupsData = []
    totalGoupCount = int(data[0])
    currentGroupNr = 0
    currentLine = 1
    while currentGroupNr < totalGoupCount:
        groupMemberCount = int(data[currentLine])
        currentGroup = []
        iteration = 1
        while iteration < groupMemberCount:
            iteration += 1
            currentLine += 1
            fullName, time = getNameAndTime(data[currentLine])
            currentGroup.append({'fullName': fullName, 'time':time, 'group': currentGroupNr + 1})
        groupsData.append(currentGroup)
        currentGroupNr += 1
    return groupsData


def getNameAndTime(data):
    fullName = data[:20]
    time = data[20:]
    return fullName, time

distributeIntoGroups(readFile())

