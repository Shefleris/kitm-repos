with open('1113/data06.txt', 'w', encoding='utf-8') as f:
    f.write('Pirma eilute \n')
    f.write('Antra eilute \n')
    f.write('Trecia eilute \n')

with open('1113/data06v2.txt', 'w', encoding='utf-8') as f:
    print('Pirma eilute', file=f)
    print('Antra eilute', file=f)
    print('Trecia eilute', file=f)

txt = ['Pirma eilute \n', 'Antra eilute \n','Trecia eilute \n']
with open('1113/data06v3.txt', 'w', encoding='utf-8') as f:
    # f.write(str(txt))
    f.writelines(txt)

