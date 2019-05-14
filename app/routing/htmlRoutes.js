const { join } = require('path')

module.exports = app => {
  // catch all route directing to home.html
  app.all('/', (req, res) => {
    res.sendFile(join(__dirname, '../public/home.html'))
  })

  // GET /survey
  app.get('/survey', (req, res) => {
    res.sendFile(join(__dirname, '../public/survey.html'))
  })
}
