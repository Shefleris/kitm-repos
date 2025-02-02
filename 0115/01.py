def splitNr():
    with open('./0115/01-data', 'r', encoding='utf-8') as f:
        skSar = []
        text = file.read()
        skSar = [sk.strip() for sk in text.split(',')]
        # skSar = [sk for sk in text.split(',')]
        print(skSar)