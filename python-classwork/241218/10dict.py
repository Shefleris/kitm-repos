sarKomandos = ['Petras', 'Antanas', 'Jonas', 'Rimas', 'Vyc', 'Rimas']
# komanda = dict.fromkeys(sarKomandos, {'Trys':0, 'Du':0, 'Bauda':0, 'Pr':0})
komanda = {zaidejas:{'Trys':0, 'Du':0, 'Bauda':0, 'Pr':0} for zaidejas in sarKomandos }
print(komanda)

komanda['Petras']['Trys']+= 1 
print(komanda)