const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true'

    })
    .option('m', {
        alias: 'multiplicador',
        type: 'number',
        demandOption: 'true',
        describe: 'Funciona para multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Funciona para listar'

    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser numerica';
        }
        if (isNaN(argv.m)) {
            throw 'El multiplicador debe ser numerica';
        }
        return true;
    })
    .argv;

    module.exports=argv;