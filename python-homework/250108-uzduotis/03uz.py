def readFile ():
    with open('0108-uzduotis/duom3.txt', 'r', encoding='utf-8') as f:
        data = f.read().splitlines()
        return data

def writeFile(data):
    with open('0108-uzduotis/rez3.txt', 'w', encoding='utf-8') as f:
        finished, withdrew = filterData(data)
        finishedSorted = sorted(finished, key=lambda athlete: ((len(athlete['timeSpent']), athlete['timeSpent'], athlete['fullName'])))
        withdrewSorted = sorted(withdrew, key=lambda athlete: athlete['fullName'])
        
        for athlete in finishedSorted:
            f.write(f'{athlete['fullName']:20} {athlete['timeSpent']}\n')
        f.write(f'\n')
        for athlete in withdrewSorted:
            f.write(f'{athlete['fullName']:20} {athlete['timeSpent']}\n')

def dataSeparation(data):
    athletes = []
    for i in data:
        if i.isdigit() != True:
            fullName = i[:20].strip()
            time = i[20:].strip()
            if len(athletes) == 0 or not any(athlete['fullName'] == fullName for athlete in athletes):
                athletes.append(dict(fullName = fullName, startTime = time, endTime = None))
            else:
                indexAthlete = next((index for index, athlete in enumerate(athletes) if athlete['fullName'] == fullName), None)
                athletes[indexAthlete]['endTime'] = time
    return athletes

def convertTimeIntoSeconds(data):
    hours, minutes, seconds = data.split()
    timeInSeconds = ((int(hours) * 60) + int(minutes)) * 60 + int(seconds)
    return timeInSeconds

def convertSecondsIntoTime(data):
    hours = data // 60 // 60
    minutes = (data // 60) % 60 
    seconds = (data % 60) % 60
    return hours, minutes, seconds

def timeDiference(startTime, endTime):
    timeSpent = endTime - startTime
    return timeSpent

def filterData(data):
    withdrew = [athlete for athlete in data if athlete['timeSpent'] == 'Nebaigė trasos']
    finished = [athlete for athlete in data if athlete['timeSpent'] != 'Nebaigė trasos']
    return finished, withdrew

def execute():
    data = readFile()
    athletesData = dataSeparation(data)
    for athlete in athletesData:
        if athlete['endTime'] is None:
            athlete['timeSpent'] = 'Nebaigė trasos'
            continue
        startInSeconds = convertTimeIntoSeconds(athlete['startTime'])
        endInSeconds = convertTimeIntoSeconds(athlete['endTime'])
        timeSpent = timeDiference(startInSeconds, endInSeconds)
        hours, minutes, seconds = convertSecondsIntoTime(timeSpent)
        if hours == 0:
            athlete['timeSpent'] = str(f'{minutes} {seconds}')
            continue
        athlete['timeSpent'] = str(f'{hours} {minutes:02} {seconds}')
    writeFile(athletesData)

execute()
