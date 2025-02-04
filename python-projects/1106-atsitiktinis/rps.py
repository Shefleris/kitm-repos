import random

txt = ['žirklės', 'akmuo', 'popierius']
pakartosite = 'Y'
while pakartosite == 'Y':
    print('Įveskite jūsų pasirinkimą žirklės, popierius, akmuo ')
    asmensPasirinkimas = input('input=...')
    while asmensPasirinkimas not in txt:
        print('Jūsu pasirinkimas netinkamas')
        asmensPasirinkimas = input('input=...')

    kompiuterioPasirinkimas = random.choice(txt)
    print('Kompiuterio pasirinkimas - ' + str(kompiuterioPasirinkimas));
    if asmensPasirinkimas == kompiuterioPasirinkimas:
        print("Lygiosios")
    elif asmensPasirinkimas == "žirklės":
        match kompiuterioPasirinkimas:
            case 'akmuo':
                print('Pralaimėjote')
            case 'popierius':
                print('Laimėjote')
    elif asmensPasirinkimas == "popierius":
        match kompiuterioPasirinkimas:
            case 'žirklės':
                print('Pralaimėjote')
            case 'akmuo':
                print('Laimėjote')
    elif asmensPasirinkimas == "akmuo":
        match kompiuterioPasirinkimas:
            case 'popierius':
                print('Pralaimėjote')
            case 'žirklės':
                print('Laimėjote')
    print('Ar norite pakartoti žaidimą? Y or N')
    pakartosite = input('input=...')