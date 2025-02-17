# Užduotis: Išplėstinė vartotojo duomenų apdorojimo programa
Parašyk programą, kuri apdoros vartotojo duomenis (vardą, pavardę ir asmens kodą) bei patikrins, ar vartotojo gimimo vieta priklauso Lietuvai pagal asmens kodo informaciją. Ši programa naudoja duomenų tipus, string metodus, if sąlygas ir switch.

### 1. Instrukcijos:
- Sukurk tris kintamuosius, skirtus saugoti vartotojo:
    1. vardą (string),
    2. pavardę (string),
    3. asmens kodą (string, tarkime, asmens kodas yra sudarytas iš 11 skaitmenų, pvz.: "38507131234").

### 2. Programos funkcionalumas:
- **Ilgio patikrinimas:** Patikrink, ar vartotojo vardas yra bent 3 simbolių ilgio, o pavardė – bent 5 simbolių ilgio. Jei bet kuris iš jų neatitinka šių reikalavimų, išvesk klaidos pranešimą.
- **Vardo ir pavardės apdorojimas:**
    - Išvesk pirmąją vardo raidę didžiąja, o likusias mažąja.
    - Išvesk visą pavardę didžiosiomis raidėmis.
- **Asmens kodo analizė:**
    - Paimk iš asmens kodo gimimo metus (pirmi 2 skaitmenys) ir nustatyk, kuris šimtmetis tai yra, kaip ir ankstesnėje užduotyje.
    - Naudodamasis switch, išskirk vartotojo gimimo vietą pagal asmens kodo trečiąjį skaitmenį:
        - Jei trečias skaitmuo yra „1“ arba „2“, išvesk „Gimimo vieta: Lietuva“.
        - Jei trečias skaitmuo yra „3“, išvesk „Gimimo vieta: Užsienis“.
        - Jei skaitmuo yra bet koks kitas, išvesk „Gimimo vieta: Nežinoma“.

### 3. Pavyzdys:
- Jeigu vardas yra „jonas“, pavardė „petrauskas“, o asmens kodas „38507131234“, programa turėtų:
    - Pakeisti vardo raidę į „Jonas“.
    - Pavardę atvaizduoti kaip „PETRAUSKAS“.
    - Atpažinti gimimo datą kaip 1985-07-13.
    - Išspausdinti „Gimimo vieta: Lietuva“.

### 4. Papildoma užduotis:
- Patikrink, ar asmens kodas yra tinkamo formato (pvz., ar jame nėra raidžių arba ar jis yra lygiai 11 simbolių).