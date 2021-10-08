const fs = require('fs')

const crearArchivo = (base = 5) => {
    console.log('===============================');
    console.log(`        tabla del ${base}      `);
    console.log('===============================');
    let salida = '';
    for (let i = 0; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida)
    console.log(`Creado tabla-${base}.txt`);
}
const getListar = async(base = 5)=>{
   try{
    console.log('===============================');
    console.log(`        tabla del ${base}      `);
    console.log('===============================');
    let salida = '';
    for (let i = 0; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida)
    return `Creado tabla-${base}.txt`;

   }catch(err){
      console.log(err);
   }
}
const getcrearArchivo = async(base = 5)=>{
    try{
     let salida = '';
     for (let i = 0; i <= 10; i++) {
         salida += `${base} x ${i} = ${base * i}\n`;
     }
     console.log(salida);
 
     fs.writeFileSync(`tabla-${base}.txt`, salida)
     return `Creado tabla-${base}.txt`;
 
    }catch(err){
       console.log(err);
    }
 }

 const createfileasync = async(base = 5, listar =false)=>{
    try{

        let salida = '';
        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log('===============================');
            console.log(`        tabla del ${base}      `);
            console.log('===============================');
            console.log(salida);
        }
    
    
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `Creado tabla-${base}.txt`;
    
       }catch(err){
          console.log(err);
       }
 }

 const multiplicateTable = async (base=1, multiplicador=1 ,listar =false)=>{
    try{

        let salida = '';
        for (let i = 0; i <= multiplicador; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log('===============================');
            console.log(`        tabla del ${base}      `);
            console.log('===============================');
            console.log(salida);
        }
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `Creado tabla-${base}.txt`;
    
       }catch(err){
          console.log(err);
       }
 }
 


module.exports = {
    crearArchivo,
    getcrearArchivo,
    createfileasync,
    multiplicateTable,
    getListar
}