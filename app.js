
const { number, boolean, describe } = require('yargs');
const { crearArchivo, getcrearArchivo, getListar, createfileasync, multiplicateTable } = require('./helper/multiplicar')
const argv =require('./config/yarg');
console.clear();



// let base = 3;

// const [,,arg3 = 'base=5']=process.argv
// const [ , base = 5] = arg3.split('=');
// console.log(base);

// getcrearArchivo(8)
//     .then(resultado => console.log(resultado))
//     .catch(err => console.log(err));

console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.b);

multiplicateTable(argv.b,argv.m,argv.l)
     .then(resultado => console.log(resultado))
     .catch(err => console.log(err));
