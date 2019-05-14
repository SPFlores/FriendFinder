const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  db.query('SELECT * FROM movies', (e, movies) => {
    if (e) throw e
    res.render('index', { movies })
  })
})

app.delete('/movies/:id', (req, res) => {
  db.query('DELETE FROM movies WHERE ?', { id: req.params.id }, e => {
    if (e) throw e
    res.sendStatus(200)
  })
})

db.connect(_ => app.listen(3000))
