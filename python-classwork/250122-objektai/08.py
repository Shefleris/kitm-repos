# __new__

class DataBase:
    __instance = None

    def __new__(cls, *args,**kwargs):
        if cls.__instance is None:
            cls.__instance = super().__new__(cls)
        return cls.__instance

    def __init__(self, user, psw, port):
        self.user = user
        self.psw = psw
        self.port = port

    def connect(self):
        print(f'prisijunge {self.user}')

db1 = DataBase('admin', '123', 8080)
db2 = DataBase('super', 'abc', 8081)

print(id(db1), id(db2))