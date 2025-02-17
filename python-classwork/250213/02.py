class Color:
    def __init__(self, red, green, blue):
        if not self._tikrinti(red, green, blue):
            raise ValueError("Red, green and blue cannot be bellow 0 or above 255")
        self.red = red
        self.green = green
        self.blue = blue
    
    def _tikrinti(self, red, green, blue):
        return all(0<=value<=255 for value in (red, green, blue))

    def toHex(self):
        return ('#{:02x}{:02x}{:02x}').format(self.red, self.green, self.blue)

    def display(self):
        return f'Spalva = {self.toHex()}'

class ColorAlpha(Color):
    def __init__(self, red, green, blue, alpha):
        if alpha >= 1 or alpha <= 0:
            raise ValueError("Alpha cannot be bellow 0 or above 1")
        super().__init__(red, green, blue)
        self.alpha = alpha
    
    def __alphaToHex(self):
        return f'{int(self.alpha * 255):02x}'

    def toHexAlpha(self):
        return f'{super().toHex()}{self.__alphaToHex()}'
    
    def display(self):
        return f'Alpha = {self.toHexAlpha()}'

try:
    sp1 = Color(125, 15, 155)
    print(sp1.toHex())  
except ValueError as ex:
    print(ex)

spA1 = ColorAlpha(145, 255, 14, 1.5)
print(spA1.toHexAlpha())