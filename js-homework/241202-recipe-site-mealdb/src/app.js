import './scss/style.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import displaySixRecipes from './modules/ui/displaySixRecipes';
import footerEventListener from './modules/eventListeners/footerEventListener';
import landingHeaderListener from './modules/eventListeners/landingHeaderListener';
import navbarEventListener from './modules/eventListeners/navbarEventListener';
import cardEventListeners from './modules/eventListeners/cardEventListeners';


// console.log('testing webpack')

await navbarEventListener();
await landingHeaderListener();
await displaySixRecipes('.div__discover');
await cardEventListeners('.div__discover');
await footerEventListener();