import sys

duomSar = ['./0115-klaidos/01data.txt', './0115-klaidos/02data.txt', './0115-klaidos/03data.txt']

duomKlaida = []
duomInfo = []

try:
    for byla in duomSar:
        try:
            f = open(byla)
            duomInfo.append(f.read())
            print(f'{f}')
        except Exception as ex:
            duomKlaida.append(f'{byla} klaida {ex}')
            sys.exit()
finally:
    f = open('logo.txt', 'a')
    for i in duomInfo:
        f.write(i,'\n')
    f.write(str(duomKlaida))
    f.close()
    print('Išsaugota')