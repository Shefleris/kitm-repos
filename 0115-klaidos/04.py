import math

def trPlotas(a, b, c):
    if a<= 0 or b<=0 or c<=0:
        raise ValueError('Krastine turi buti didesnė už 0')
    p = (a+b+c)/2
    s = math.sqrt(p*(p-a)*(p-b)*(p-c))
    return s

tr1 = trPlotas(5,8,4)
print(tr1)

tr2 = trPlotas(-2,10,10)
print(tr2)

class TrikampioKlaida(Exception):
    '''Viena is trikampio klaida...'''