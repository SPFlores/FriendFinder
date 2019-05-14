// GET /api/friends to display JSON of all possible friends
// POST /api/friends to handle incoming survey results, also compatibility logic

document.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.id === 'submitBtn') {
    if ()
    let answerArr = []
    for (let i = 0; i < 10; i++) {
      answerArr[i] = document.getElementById(`q${i + 1}`).value
    }
    console.log(answerArr)
  }
})
