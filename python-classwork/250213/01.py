# rgb ---> hex

# def rgbToHex(sk):
#     return '%02x' % sk

# print(rgbToHex(165))

# def rgbToHex(r, g, b):
#     return ('{:02x}'*3).format(r, g, b)

# print(rgbToHex(25,145,165))

class Color:
    def __init__(self, red, green, blue):
        self.red = red
        self.green = green
        self.blue = blue

    def toHex(self):
        return ('#{:02x}{:02x}{:02x}').format(self.red, self.green, self.blue)

class ColorAlpha(Color):
    def __init__(self, red, green, blue, alpha):
        super().__init__(red, green, blue)
        self.alpha = alpha
    
    def toHexAlpha(self):
        return ('#{:02x}{:02x}{:02x}{:.1f}').format(self.red, self.green, self.blue, self.alpha)

sp1 = Color(125, 15, 255)
print(sp1.toHex())

sp1 = ColorAlpha(145, 255, 14, 0.5)
print(sp1.toHexAlpha())