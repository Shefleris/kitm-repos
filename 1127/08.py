txt = '0102 asdf wasd 51sa 3re asdf 1563 2 4'

raides = sum(1 for simbolis in txt if simbolis.isalpha())
skaiciai = sum(1 for simbolis in txt if simbolis.isdigit())
print(raides)
print(skaiciai)

