while True:
    try:
        sk = float(input('Iveskite skaicius... '))
        break
    except ValueError as ex:
        print(f"Neteisingi ivesti duomenys - {ex}")

