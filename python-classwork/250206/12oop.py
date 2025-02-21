class User:
    def __init__(self, name):
        self.__name = name
    
    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, newValue):
        if not newValue:
            raise ValueError('newValue empty')
        self.__name = newValue
    
    @name.deleter
    def name(self):
        del self.__name


us1 = User('Jonas')
print(us1.name)
us1.name = 'Petras'
print(us1.name)
print(vars(us1))
del us1.name
print(vars(us1))