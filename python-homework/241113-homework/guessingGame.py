import random

def getRandom():
    print('Įrašykite skaičių iki kurio sugeneruoti')
    generatorNr = int(input('input=...'))
    actualNumber = random.randint(1, generatorNr)
    return generatorNr, actualNumber

def getGuess():
    print('Įrašykite spėjimą')
    while True:
        try:
            roundGuess = int(input('input=...'))
            if int(roundGuess)<1: 
                raise ValueError
            else:
                break
           
        except ValueError:
            print('Spėjimas turi būti skaičius didesnis negu 0.')
    return int(roundGuess)

def getRepeatGame():
    print('Ar žaisite dar? Taip ar Ne')
    repeatGame = input('input=...')
    return repeatGame

def processGuess(roundGuess, actualNumber):
    if roundGuess > actualNumber:
        print('Sugeneruotas skaičius yra mažesnis')
        return 'sugeneruotas skaičius yra mažesnis'
    elif roundGuess < actualNumber:
        print('Sugeneruotas skaičius yra didesnis')
        return 'sugeneruotas skaičius yra didesnis'
    else:
        print(f'Atspėjote sugeneruota skaičių {actualNumber}')
        return 


def playGame():
    with open('registravimas.txt', 'w', encoding='UTF-8') as f:
        gameNumber = 0
        repeatGame = 'Taip'
        while repeatGame in ['Taip', 'taip', 'T', 't']:
            playerGuess = roundNr = 0
            gameNumber += 1
            geratorNumber, actualNumber = getRandom()
            f.write(f'Vartotojas įvedė skaičių {geratorNumber} \n')
            f.write(f'Sugeneruotas atsitiktinis skaičius {actualNumber} .\n')
            while playerGuess != actualNumber:
                roundNr +=1
                playerGuess = getGuess()
                guessResult = processGuess(playerGuess, actualNumber)
                if playerGuess != actualNumber:
                    f.write(f'{roundNr} spėjimu vartotojas įvedė {playerGuess}. Atsakymas - {guessResult} \n')
            repeatGame = getRepeatGame()
            f.write(f'...............\n')
            f.write(f'{roundNr} spėjimu vartotojas atspėjo skaičių\n')
            f.write(f'Į užklausą „Ar žaisite dar“ pasirinko {repeatGame}\n')
        f.write(f'Vartotojas žaidė {gameNumber} kartus/ą \n')        

playGame()