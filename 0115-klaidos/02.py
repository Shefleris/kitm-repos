while True:
    try:
        sk = float(input('Iveskite skaicius... '))
        rez = 100/sk
    except Exception as ex:
        print(f"Neteisingi ivesti duomenys - {ex}")
    else:
        break
    finally:
        print("Visada veikia")