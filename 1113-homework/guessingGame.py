import random

class GuessingGame:
    roundNr = 1
    actualNumber

    def getRandom():
        print('Įrašykite skaičių iki kurio sugeneruoti')
        n = int(input('input=...'))
        actualNumber = randint(1, n)
        return actualNumber

    def getGuess():
        print('Įrašykite spėjimą')
        roundGuess = int(input('input=...'))
        return roundGuess

    def getRepeatGame():
        print('Ar žaisite dar? y or n')
        repeatGame = input('input=...')
        return repeatGame

    def processGuess():
        if roundGuess > actualNumber:
            return 'Sugeneruotas skaičius yra mažesnis'
        elif roundGuess < actualNumber:
            return 'Sugeneruotas skaičius yra didesnis'
        else:
            return 'Atspėjote sugeneruota skaičių'
    
    def resetGameState():
        roundNr = 1

    def playGame():
        getRandom()


class IoFile:
    def __init__(roundNr, roundGuess, actualNumber):
        self.roundNr = roundNr
        self.roundGuess = roundGuess
        self.actualNumber = actualNumber

    def writeF():
        with open('./registravimas.txt', 'w') as f:
            pass
    
    def readF():
        with open('./registravimas.txt', 'r') as f:
            txt = []
        for eil in f:
            txt = f.readlines()
        return txt