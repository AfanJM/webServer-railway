const http = require('http')

const app = http


app.createServer((req, res) =>{

    //-- para descargar archivos excel: 
    
    // res.setHeader('Content-Disposition', 'attachment; filename=listado.csv')

    // res.writeHead(200, {'Content-type': 'application/csv'})

    res.write('Hola mundo');


    res.end()
})
.listen(8080)

console.log('Escuchando en el puerto 8080')


