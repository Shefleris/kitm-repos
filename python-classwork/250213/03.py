class Robotas:
    def __init__(self, name, age, force):
        self._name = name  # Atributas
        self._age = age    
    
    def sakykLabas(self):
        return f'Sveiki. As {self._name}'
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise ValueError("Vardas str")
        self._name = value
    
    