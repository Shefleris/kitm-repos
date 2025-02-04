# old school method of writing to files

try:
    f = open('./1113/data01.txt','w')
    f.write('Pirmas kartas su byla\n')
    a = 5
    f.write(str(a), '\n')
    f.write(f'a={a}', '\n')

    f.write('Kitas')
finally:
    f.close