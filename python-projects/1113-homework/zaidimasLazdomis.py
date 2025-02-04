import random

def getPlayers():
    print('Įveskite pirmo žaidėjo vardą')
    playerOne = input('input=...')
    print('Įveskite antro žaidėjo vardą')
    playerTwo = input('input=...')
    print(f'Žaidėju vardai: {playerOne}, {playerTwo}')
    return [playerOne, playerTwo]

def getSticksTaken(stickCount):
    while True:
        try:
            print('Kiek lazdeliu norite paimti?')
            sticksTaken = int(input('input=...'))
            if sticksTaken > 3 or sticksTaken < 1 or sticksTaken > stickCount: 
                raise ValueError
            else:
                break
           
        except ValueError:
            print('Paiimtu lazdeliu skaičius turi būti tarp 1 ir 3. Taip pat negali būti didesnis negu likusiū lazdeliu skaičius')
    return sticksTaken

def getRandomPlayer():
    return random.randint(0, 1)

def changePlayer(currentRoundPlayer, stickCount):
    if currentRoundPlayer == 0 :
        return 1
    else:
        return 0

def changeInitialStickCount(stickCount):
    print(f'Dabartinis lazdeliu skaičius {stickCount}')
    print('Ar norite pakeisti lazdeliu skaičių? Taip ar Ne')
    choice = input('input=...')
    while choice in ['Taip', 'taip', 'T', 't']:
        try:
            print('Įveskite norimų lazdelių skaičių')
            stickCount = int(input('input=...'))
            if stickCount > 6:
                break
            else:
                raise ValueError
        except ValueError:
            print('Lazdeliu skaičius negali būti žemesnis negu 6')
    return stickCount

def playTurn(players, playersTurn, stickCount):
    print('.........')
    print(f'Dabar pasirenka {players[playersTurn]}')
    turn = getSticksTaken(stickCount)
    stickCount -= turn
    print(f'Liko lazdeliu {stickCount}')
    return turn, stickCount

def gameEnd(players, playersTurn, stickCount):
    if stickCount < 0:
        print(f'Šis žaidimas pasibaigė')
        print(f'Žaidimą laimėjo {players[playersTurn]}.')

def repeatGame():
    print('Ar žaisite dar? Taip ar Ne')
    choice = input('input=...')
    if choice in ['Taip', 'taip', 'T', 't']:
        return [True, choice]
    else:
        return [False, choice]

def playGame():
    gameNumber = 0
    stickCount = 10
    playAgain = [True]
    with open('registravimas.txt', 'w', encoding='UTF-8') as f:
        players = getPlayers()
        f.write(f'Žaidėju vardai: {players[0]}, {players[1]}\n')
        while playAgain[0] == True:
            gameNumber += 1
            stickCount = changeInitialStickCount(stickCount)
            f.write(f'Lazdeliu pasirinktas skaičius {stickCount}. \n')
            playersTurn = getRandomPlayer()
            f.write(f'Žaidimą pradeda {players[playersTurn]}\n')
            while stickCount>0:
                turn, stickCount = playTurn(players, playersTurn, stickCount)
                f.write(f'{players[playersTurn]} paima {turn} lazdeles. Liko {stickCount}\n')
                playersTurn = changePlayer(playersTurn, stickCount)
            f.write('...........................\n')
            print(f'Žaidimą laimėjo {players[playersTurn]}\n')
            f.write(f'Žaidimą laimėjo {players[playersTurn]}\n')
            playAgain = repeatGame()
            f.write(f'Į užklausą „Ar žaisite dar“ pasirinko {playAgain[1]}\n')
        f.write(f'Žaidimą žaidėte {gameNumber} kartus/ą \n') 

playGame()