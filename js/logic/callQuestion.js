async function getQuestions() {
    const res = await fetch('./js/questions.json')
    const json = await res.json()
    return json
  }
  
  var usedQuestions = []
  
  const questionContainer = document.querySelector('.question')
  const questionTitle = document.querySelector('.questionsTitle').children[0]
  const ansewrs = document.querySelector('.answers').children
  
  async function callQuestion(house) {
    if (house > 19) {
      house = 19
    }
    questionContainer.style.height = '100vh'
    var usedBoxes = [0, 1, 2, 3]
    const res = await getQuestions()
    const questions = res.questions
  
    var dificulty = house
  
    while (usedQuestions.includes(dificulty) && dificulty > 0) {
      dificulty--
    }
  
    questionTitle.innerText = questions[dificulty].question
  
    const answerLoc = Math.floor(Math.random() * 4)
  
    ansewrs[answerLoc].innerText = questions[dificulty].rightAnswer
  
    usedBoxes.splice(answerLoc, 1)
  
    var wrongAnswers = questions[dificulty].wrongAnswers
  
    for (var i = wrongAnswers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = wrongAnswers[i]
      wrongAnswers[i] = wrongAnswers[j]
      wrongAnswers[j] = temp
    }
  
    usedBoxes.forEach((res, i) => {
      ansewrs[res].innerText = wrongAnswers[i]
    })
  
    usedQuestions.push(dificulty)
    startTimer()
  }
  
  async function answer(e) {
    const points = stopTimer()
    players[turn].points += ((30000 - points) / 100) * houses
  
    const clickedAnswer = e.innerText
    const lastQuest = usedQuestions[usedQuestions.length - 1]
    const { questions } = await getQuestions()
    if (clickedAnswer === questions[lastQuest].rightAnswer) {
      e.style.backgroundColor = '#00b339'
      rightAnswer()
    } else {
      e.style.backgroundColor = '#ed1915'
      wrongAnswer()
    }
    setTimeout(() => {
      closeQuestion()
    }, 1000)
  }
  
  function closeQuestion() {
    questionContainer.style.height = '0vh'
    for (i = 0; i < ansewrs.length; i++) {
      ansewrs[i].style.backgroundColor = '#fc5e5b'
    }
  }
