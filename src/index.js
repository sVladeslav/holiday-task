import './assets/sass/style.scss';
import { sum } from './assets/js/calc.js';

console.log( sum( 4, 5, 45, 4, 654, 8, 7, 5241, 21, 54, 54, 5, 12, 1, -54 ) );

fetch( './data/employees.json' )
  .then( response => response.json() )
  .then( console.log )
  .catch( console.error );
