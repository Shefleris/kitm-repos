import csv

def sarasasCSV():
    with open('./0115/03-data.csv', 'r', encoding='utf-8') as f:
        csvRead = csv.reader(file)
        sarCSV = []
        for row in csvRead:
            sarCSV.append(row)
        return sarCSV

def dictCSV():
    with open('./0115/03-data.csv', 'r', encoding='utf-8') as file:
        # file.seek(0)
        csvRead = csv.DictReader(file)
        sar = []
        for row in csvRead:
            sar.append(row)
            print(row)
            print(type(row))
        return sar
print(dictCSV())

def dictCSVKitas():
    with open('./0115/03-data.csv', 'r', encoding='utf-8') as file:
        csvRead = csv.DictReader(file)
        sar = []
        duomenysDict = {f'eil_{i}': row for i, row in enumerate(csvRead)}
        return sar
        print(duomenysDict)
        