def checkIfValid(imestaMoneta):
    match imestaMoneta:
            case 10:
                return 0.1
            case 20:
                return 0.2
            case 50:
                return 0.5
            case 1:
                return 1.0
            case 2: 
                return 2.0
            case _:
                print("Netinkama moneta. Meskite dar kartą“")
                return 0

print('Pasirinkite norimos kavos kaina eurais')
kavosKaina = float(input('input=...'))
likoMoketi = kavosKaina

while likoMoketi >= 0:
    monetosVerte = None
    print('Imeskite moneta 10, 20, 50 (centu) arba 1, 2 (eurus)')
    imestaMoneta = float(input('input=...'))
    monetosVerte = checkIfValid(imestaMoneta)
    if monetosVerte > 0:
        likoMoketi = likoMoketi - monetosVerte
        print('Jums liko sumokėti = '+ str(likoMoketi)+' e')


    