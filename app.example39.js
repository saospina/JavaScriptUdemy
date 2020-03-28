//Video 39 Manejo de errores try catch

/* try {
    var a = 100;
    if (a === 101) {
        throw 'Que mal'
    } else {
        throw 'ohh!'
    }
    console.log('el valor de a: ', a);

} catch (error) {
    if (error === 'Que mal') {
        console.log('Error tipo 1');

    } if (error === 'ohh!') {
        console.log('Error tipo 2');
        
    }
    console.log('Error del catch: ', error);

}

finally {
    console.log('Finalmente');

} */

//Otro ejemplo

try {
    // throw new Error('Error tipo 1')
    throw {
        nombreError: 'Error tipo 1',
        accion: 'Turn on the server',
        codeerror: '01'
    }
    console.log('esta parte no se ejecuta');
    
} catch (error) {
    console.log(error);
    console.log(error.codeerror);
    
    
    
}
finally {
    console.log('finalmente');
    
}