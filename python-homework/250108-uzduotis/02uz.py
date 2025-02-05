def readFile ():
    with open('0108-uzduotis/duom2.txt', 'r', encoding='utf-8') as f:
        noted = f.readlines()
        return noted

def countExercises(data):
    exercises = {}
    for notedExercise in data:
        exerciseName, exerciseCount = notedExercise.split()
        exerciseCount = int(exerciseCount)
        if exerciseName in exercises:
            exercises[exerciseName] += exerciseCount
        else:
            exercises[exerciseName] = exerciseCount
    return exercises

def writeFile(inputData):
    with open('0108-uzduotis/rez2.txt', 'w', encoding='utf-8') as f:
        for inputValue in inputData:
            f.write(f'{inputValue} = {inputData[inputValue]}\n')

def sortData(inputData):
    return dict(sorted(inputData.items(), key=lambda inputItem:(-inputItem[1], inputItem)))

def executeCount():
    notedData = readFile()
    countedExercises = countExercises(notedData)
    sortedExercises = sortData(countedExercises)
    writeFile(sortedExercises)


executeCount()