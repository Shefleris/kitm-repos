# nebaigtas

def requestNum():
    print("Iveskite skaičių kūrį norite paversti žodžiais")
    number = float(input("input=..."))
    return number

def matchNumber(number):
    if (number<20):
        match number:
            case 0: return "nulis" 
            case 1: return "vienas" 
            case 2: return "du"
            case 3: return "trys" 
            case 4: return "keturi" 
            case 5: return "penki"
            case 6: return "šeši" 
            case 7: return "septyni" 
            case 8: return "aštuoni"
            case 9: return "devyni"
            case 10: return "dešimt" 
            case 11: return "vienuolika"
            case 12: return "dvylika"
            case 13: return "trylika" 
            case 14: return "keturiolika" 
            case 15: return "penkiolika"
            case 16: return "šešiolika" 
            case 17: return "septyniolika" 
            case 18: return "aštuoniolika"
            case 19: return "devyniolika"
    elif (number<100):
        match number:
            case 20: return "dvidešimt"
            case 30: return "trisdešimt" 
            case 40: return "keturiasdešimt" 
            case 50: return "penkiasdešimt"
            case 60: return "šešiasdešimt" 
            case 70: return "septyniasdešimt" 
            case 80: return "aštuoniasdešimt"
            case 90: return "devyniasdešimt"
    elif (number<1000):
        match number:
            case 100: return "šimtas"
            case 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900:
                return "šimtai"
    elif (number<10000):
        match number:
            case 1000: return "tūkstantis"
            case 2000 | 3000 | 4000 | 5000 | 6000 | 7000 | 8000 | 9000:
                return "tūkstančiai"
    elif (number<100000):
        return "tūkstančių"
            
print(matchNumber(1000))