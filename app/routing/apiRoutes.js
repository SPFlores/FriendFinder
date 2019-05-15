// const { fetch, alert } = window
// require users from the friends.js file
const users = require('../data/friends.js')

console.log(users)

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    // display JSON of all possible friends
  })

  const compare = user1 => {
    // pull in users
    // loop over it
    // find totalDifference
    // find which is the smallest difference

    // users.forEach(user2 => {
    //   let differenceArr = []
    //   for (let i = 0; i < user2.length; i++) {
    //     differenceArr.push(Math.abs(user2[i] - user1[i]))
    //   }
    //   let totalDifference = differenceArr.reduce()
    // })
  }

  app.post('/api/friends', (req, res) => {

  })
  // POST /api/friends to handle incoming survey results, also compatibility logic
  document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault()
    if (e.target.id === 'submitBtn') {
      if (!document.querySelector('#name').value || !document.querySelector('#photo').value) {
        console.log('blanks!')
      } else if (document.querySelector('#name').value && document.querySelector('#photo').value) {
        let answers = []
        let name = document.querySelector('#name').value
        let photo = document.querySelector('#photo').value
        let user1 = { name, photo, answers }
        for (let i = 0; i < 10; i++) {
          if (document.getElementById(`q${i + 1}`).value === '') {
            alert(`Please answer question ${i + 1}.`)
            break
          } else {
            answers[i] = document.getElementById(`q${i + 1}`).value
          }
        }
        fetch('/api/friends', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: user1.name,
            photo: user1.photo,
            answers: user1.answers
          })
        })
          .then(user1 => {
            answers = []
            document.querySelector('#name').value = ''
            document.querySelector('#photo').value = ''
            user1 = {}
            for (let i = 1; i < 11; i++) {
              document.getElementById(`q${i}`).value = ''
            }
            compare(user1)
            // put user1 into the friends.js file
            // modal pop up to display the common friend
          })
          .catch(e => console.log(e))
      }
    }
  })

}
