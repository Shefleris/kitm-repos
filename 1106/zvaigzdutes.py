print('Parašykite skaičių kuri atvaizduoti žvaigždutėmis')
skZvaigzdutes = input('input=...')

for i in range(len(skZvaigzdutes)):
    for x in range(int(skZvaigzdutes[i])):
        if x == int(skZvaigzdutes[i])-1:
            print('*')
        else:
            print('*', end='')
    
