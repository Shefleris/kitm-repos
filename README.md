# nodejs-api
This is a simple node.js api without any additional libraries or frameworks
## Prerequisites:
- node

## Reikalavimai
1. CSV Apdorojimas:
    - Sukurkite funkciją CSV failams skaityti ir paversti juos JSON masyvais.
    - Tuščios eilutės ir neišsamūs įrašai (pvz., tušti ID) turi būti ignoruojami.
    - Naudokite tik Node.js pagrindinius modulius (fsir kt. ).

2. Atsakymų Grąžinimas:
    - API atsakymai turi būti JSON formatu.
    - Header turi būti nurodytas: Content-Type: application/json.
    - Užtikrinkite tinkamus HTTP statuso kodus:
        - 200 OK, jei užklausa sėkminga.
        - 404 Not Found, jei duomenų nerasta.
        - 500 Internal Server Error, jei įvyko serverio klaida.

3. Dokumentacija:
    - Moduliuose funkcijos turi būti dokumentuotos naudojant JSDoc formatą:
        - @param – aprašo funkcijos parametrus.
        - @return – aprašo funkcijos grąžinamą reikšmę.

4. Error Handling (Klaidos Apdorojimas):
    - Užtikrinkite, kad API tinkamai tvarkytų klaidas, pvz., failo neradimo ar neteisingo formato atvejus.
    - Klaidos atveju grąžinkite 500 Internal Server Error su tinkama žinute.

5. Kodo Skaidymas:
    - API ir CSV apdorojimo funkcijos turi būti atskirtos į logiškai atskirus modulius.