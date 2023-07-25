const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()
const app = express()


hbs.registerPartials(__dirname + '/views/partials')


//-- configurandos las vistas
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

//-- servir contenido estatico
app.use(express.static(path.join(__dirname, 'public')))

//-- home desde hbs
app.get('/home',  (req, res) =>{
    res.render('home', {
        nombre: 'Juan Sebastian Afanador',
        titulo: 'Curso de Node',
        contacto: 'Contactame'
    })
})
 
app.get('/generic',  (req, res) =>{
   res.render('generic', {
    nombre: 'Juan Sebastian Afanador',
    titulo: 'Curso de Node',
    fuerte: 'Backend Developer'
   })
})

app.get('/elements',  (req, res) =>{
    res.render('elements', {
        nombre: 'Juan Sebastian Afanador',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) =>{
    res.render('404', {
        titulo: 'Error 404',
        mensaje: '404 | Page not found'
    })
})



app.listen( process.env.PORT ,() =>{
    console.log(`Escuchando desde el puerto: ${process.env.PORT}`)
})