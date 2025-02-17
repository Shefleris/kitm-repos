# Project Task: Meal Search Application with Figma Design and MealDB API Integration
### Project Overview:
You are tasked with creating a **Meal Search Application** that integrates with **the MealDB API** and displays meal information based on user input. The project must follow modern front-end development standards, using **Webpack** for bundling, **JavaScript modules** for structure and reusability, and **HTML5** with semantic elements for accessibility and SEO optimization. Additionally, the app should be **responsive** to provide a great user experience on both desktop and mobile devices.

You will design the UI using **Figma**, implement the layout with **HTML5** and **CSS**, and handle the functionality and API integration with **JavaScript modules**. The application should also include **code transpilation** to ensure compatibility across browsers.

### Project Requirements:
1. **Design in Figma:**
    - **Homepage:** The design should feature a search bar where users can search for meals by name, ingredient, or category. Display a list of meal categories for easy navigation.
    - **Search Results Page:** After a search, display meal names, images, and short descriptions of the meals.
    - **Meal Details Page:** Display a more detailed page for a specific meal when clicked, showing ingredients, instructions, and meal image.
    - **Random Meal:** A page or section where users can click a button to view a random meal.
    - **Filters:** Implement filters that allow users to refine their meal search based on ingredients, categories, or areas (e.g., Seafood, Canadian).

2. **API Integration:**
    - **Search Meal by Name:** Allow users to search for a meal by name (e.g., “Arrabiata”). Use the following 
        - Endpoint: https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    - **List Meals by First Letter:** Display meals that start with a specific letter (e.g., 'A').
        - Endpoint: https://www.themealdb.com/api/json/v1/1/search.php?f=a
    - **Meal Details:** Show detailed information about a selected meal (ingredients, instructions).
        - Endpoint: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    - **Random Meal:** Implement a button to get a random meal suggestion.
        - Endpoint: https://www.themealdb.com/api/json/v1/1/random.php
    - **Filters:** Allow filtering by ingredient, category, or area.
        - Ingredient filter: https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
        - Category filter: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
        - Area filter: https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
    - **Images:** Use MealDB API image URLs to display meal images and ingredient thumbnails (add /preview for meal images).

3. **Front-End Development:**
    - **Webpack:** Set up Webpack for module bundling and transpiling your JavaScript code.
    - **JavaScript Modules:** Use ES6 JavaScript modules for organizing and structuring your code. Each major feature (search, meal details, filters) should be its own module.
    - **HTML5 Semantics:** Write your HTML using semantic elements such as \<header>, \<nav>, \<section>, \<article>, and \<footer> to improve accessibility and SEO.
    - **CSS:** Style the app using CSS with a focus on clean, modern design. Implement responsive design to ensure the app works well on both desktop and mobile devices.

4. **Responsive Design:**
   
    Your application must be fully responsive and adapt to different screen sizes, from mobile to desktop. Use media queries to optimize the layout for various devices.
    Ensure that images and content adjust to different screen widths (e.g., smaller images on mobile).

5. **Transpiling and Browser Compatibility:**
    - Use **Babel** to transpile your JavaScript code, ensuring compatibility with all modern browsers, including older versions of Internet Explorer (if applicable).
    - Use **PostCSS** or **Autoprefixer** to ensure that your CSS works across different browsers.
6. **Code Quality:**
    - Use **ESLint** for maintaining clean, readable, and consistent JavaScript code.
    - Implement proper error handling for API calls to display appropriate messages when no results are found or when an error occurs.
7. **Optional Features (Bonus):**
    - **Search History:** Store and display the user's search history.
    - **Favorites:** Allow users to save their favorite meals.
    - **Meal Sharing:** Provide an option to share a meal on social media or via a link.