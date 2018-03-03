// HELPERS.js

// Define Dependancies
const fs = require('fs'); // Reads system files

// Define .dump Debug Tool
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Inserts SVG Icons
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Exports Details About Site
exports.siteName = 'Puck Exchange';

// Nav Menu Items
exports.menu = [
];
