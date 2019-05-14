module.exports = app => {
  // GET /api/friends to display JSON of all possible friends
  app.get('/api/friends', (req, res) => {

  })

  const compare = _ => {

  }

  // POST /api/friends to handle incoming survey results, also compatibility logic
  document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault()
    const user = {}
    if (e.target.id === 'submitBtn') {
      if (!document.querySelector('#name').value || !document.querySelector('#photo').value) {
        console.log('blanks!')
      } else if (document.querySelector('#name').value && document.querySelector('#photo').value) {
        let answerArr = []
        for (let i = 0; i < 10; i++) {
          if (document.getElementById(`q${i + 1}`).value === '') {
            console.log(`Please answer question ${i + 1}.`)
            break
          } else {
            answerArr[i] = parseInt(document.getElementById(`q${i + 1}`).value)
          }
        }
        fetch('/api/friends', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: document.querySelector('#name').value,
            photo: document.querySelector('#photo').value,
            answers: answerArr
          })
        })
          .then(_ => {
            compare()
          })
          .catch(e => console.log(e))
      }
    }
  })

}
