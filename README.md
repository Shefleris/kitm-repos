# Task: Inventory Management for Books
You are responsible for managing the inventory of books  Create data structure by example and complete the following tasks.

1. Create a Data Structure:
- 5 categories in total.
- Each category will contain 5 books.
- For each book, store the following information:
    - Book Title
    - ISBN
    - Publishing Year (with a note if it's a new book, e.g., "New book" if the year is current)
    - Number of Pages
    - Quantity
    - Price

## Task to complete
1. Complete the Data Structure:
- Add 5 categories (e.g., Informacinės technologijos, Fantastika, Historical Fiction, Science Fiction, Mystery & Thriller).
- For each category, add 5 books.
- Each book should include the following details:
    - Title
    - ISBN
    - Publishing Year (and note if it's a new book if the year is current)
    - Pages
    - Quantity
    - Price

2. List books in console and Identify New Books:
- Mark the books that are published in the current year (e.g., if the publishing year is 2021, mark them as "New book").

3. Calculate Total Inventory Value:
- For each book, calculate the total value by multiplying the price by the quantity.
- For each category, sum the values of all books to get the total value of the category.
- Finally, calculate the overall inventory value by summing the total values of all categories.

Example Book Calculation:
- For the book “Programavimas linksmai”:
    - Price = 25 EUR
    - Quantity = 12
    - Total Value = 25 * 12 = 300 EUR

4. Print the Final Summary:
- After calculating the total values, print the total for each category and the overall total inventory value.

## Extra tasks:
- Write function for filter books by category, title, pages
- Write function for min and max price
- Wirte function for sort books by author,price, title

# Savarankiškas darbas
Užduoties Vartotojo Sąsajos Funkcionalumo Reikalavimai (JS DOM API)
 
## Užduotis: Knygų Inventoriaus Valdymas
Šioje užduotyje reikia sukurti paprastą inventoriaus valdymo sistemą knygoms, naudojant „JavaScript“ ir „DOM API“. Žemiau pateikiami reikalavimai vartotojo sąsajos funkcionalumui, kad būtų įgyvendinti inventoriaus duomenų kūrimas, knygų filtravimas ir knygų sąrašo operacijos.
 
1. Inventoriaus Kategorijų Atvaizdavimas (DOM)
- Reikalavimai:
    - Naudoti HTML sąrašus (\<ul>, \<li>), kad atvaizduoti 5 knygų kategorijas su kiekvienos kategorijos knygų sąrašu.
- Kiekviena kategorija turėtų būti atvaizduota kaip atskira kortelė arba sekcija.
- Kiekvienai knygai turi būti atvaizduojami jos atributai:
    - Pavadinimas
    - ISBN
    - Leidybos metai
    - Puslapių skaičius
    - Kiekis
    - Kaina
    - Jeigu knyga išleista šiais metais, šalia leidybos metų turi būti rodomas užrašas „Nauja knyga“.
2. Knygų Sąrašo Filtravimas
- Reikalavimai:
    - Sukurti filtravimo laukelius vartotojo sąsajoje:
    - Kategorijos pasirinkimas (naudoti \<select> elementą).
    - Knygos pavadinimo paieškos laukelis (naudoti \<input type="text">).
    - Puslapių skaičiaus diapazonas (naudoti \<input type="range"> arba \<input type="number">).
    - Pridėti mygtuką "Filtruoti", kuris leis atnaujinti atvaizduojamą knygų sąrašą pagal vartotojo įvestus kriterijus.
    - Rodyti tik tas knygas, kurios atitinka pasirinktas kategorijas ir atitinka paieškos kriterijus.
3. Knygų Kainos Min/Max Paieška
- Reikalavimai:
    - Pridėti mygtukus "Pigiausia knyga" ir "Brangiausia knyga", kurie vartotojo sąsajoje leis rasti pigiausią ir brangiausią knygą iš visų kategorijų.
    - Rasti knygą, atsižvelgiant į jos kainą, ir atvaizduoti ją vartotojui su visais jos atributais.
    - Pridėti lentelę arba atskirą sekciją, kurioje būtų rodoma rasta pigiausia arba brangiausia knyga.
4. Knygų Rūšiavimas
- Reikalavimai:
    - Pridėti meniu su rūšiavimo kriterijais:
    - Rūšiuoti pagal pavadinimą (alfabetinė tvarka).
    - Rūšiuoti pagal kainą (didėjančia/mažėjančia tvarka).
    - Rodyti knygų sąrašą pagal pasirinktą rūšiavimo kriterijų.
    - Įgalinti vartotoją pasirinkti rūšiavimo tipą iš sąrašo ir dinamiškai atnaujinti rodomą knygų sąrašą.
5. Inventoriaus Vertės Skaičiavimas
- Reikalavimai:
    - Pridėti mygtuką „Apskaičiuoti inventoriaus vertę“, kuris apskaičiuotų bendrą kiekvienos kategorijos ir viso inventoriaus vertę.
    - Apskaičiuojant knygos vertę, reikia padauginti knygos kainą iš jos kiekio.
    - Išvesti atskirai kategorijų vertes ir bendrą viso knygų inventoriaus vertę.
    - Rezultatą atvaizduoti lentelėje su kiekvienos kategorijos pavadinimu ir jos bendra verte.
6. Papildoma Funkcionalumo Logika
- Reikalavimai:
    - Visos funkcijos, tokios kaip filtravimas, rūšiavimas, minimalios ir maksimalios kainos paieška, turi veikti be puslapio perkrovimo.
    - Naudoti JavaScript ir „DOM API“ manipuliacijas tam, kad dinaminiu būdu atnaujintumėte HTML elementus.
7. Pavyzdinis Sąsajos Struktūros Išdėstymas
- HTML Komponentai:
    - \<select> kategorijos filtravimui.
    - \<input type="text"> knygos pavadinimo paieškai.
    - \<input type="range"> arba \<input type="number"> puslapių skaičiui filtruoti.
    - \<button> filtravimo mygtukui.
    - Lentelės \<table> ar sąrašai \<ul> knygų sąrašui.
    - Mygtukai, pvz., "Apskaičiuoti inventoriaus vertę", "Pigiausia knyga", "Brangiausia knyga".
 
4o
 