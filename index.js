// Mostrar en consola un mensaje que indique cuantos argumentos fueron pasados por la terminal

var colors = require("colors")
const args = process.argv.splice(2);
console.log(new Date().toLocaleString());
console.log(colors.bgGreen(`El array de argumentos tiene:  ${args.length} elementos.`));
