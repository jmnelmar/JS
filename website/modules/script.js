/**
 * ES6 Modules = An external file that contains reusable code
 * that can be imported into other JavaScript files.
 * write reusable code for many different apps.
 * can contain varaiables, classes, funtions ... and more
 * Introduced as part of ECMAScript 2015 update
 */

import {PI, getCircunference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circunference = getCircunference(10);

console.log(`${circunference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm^3`);