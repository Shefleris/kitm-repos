users = {
    'Tomuxxx' : {'id':1235, 'psw': '123d', 'admin':False, 'paz':[6, 8, 7, 9]},
    'Algiuks' : {'id':125, 'psw': '1*$23d', 'admin':False, 'paz':[5, 10, 7, 9]},
    'VyC' : {'id':1, 'psw': '*/$%^458FdSr', 'admin':True, 'paz':[10, 8, 7, 9]}
}

print(users['Tomuxxx'])
print(users['Tomuxxx']['admin'])
print(users['Tomuxxx']['paz'][0])