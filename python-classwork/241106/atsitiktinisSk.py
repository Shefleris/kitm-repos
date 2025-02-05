import random

print('Įveskite sveiką teigiamą skaičių')
atSk = int(input('input=...'))
atsitiktinisSk = random.randint(1, atSk)
counter = 1
netinkamiSpejimai = 0

while True:
    print('Atspėkite sugeneruota atsitiktinį skaičių')
    zmogausSk = int(input('input=...'))
    if zmogausSk <= 0 or zmogausSk > atSk:
        netinkamiSpejimai += 1
        print('Netinkamas spėjimas.')
    elif atsitiktinisSk > zmogausSk:
        counter += 1
        print('Sugeneruotas skaičius didesnis už ' + str(zmogausSk) + '. Atliksite ' + str(counter) + ' spėjimą')
    elif atsitiktinisSk < zmogausSk:
        counter += 1
        print('Sugeneruotas skaičius mažesnis už ' + str(zmogausSk) + '. Atliksite ' + str(counter) + ' spėjimą')
    else:
        print('Atspėjote iš ' + str(counter) +' spėjimo. ')
        print('Sugeneruotas skaičius yra ' + str(atsitiktinisSk) + '')
        print('Buvo įvesta netinkamas skaičius ' +str(netinkamiSpejimai))
        break

