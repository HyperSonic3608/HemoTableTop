async function getQuestions() {
    //Pegando as perguntas
    const res = await fetch('./js/questions.json')
    const json = await res.json()
    return json
  }
  
  var usedQuestions = []
  
  const questionContainer = document.querySelector('.question')
  const questionTitle = document.querySelector('.questionsTitle').children[0]
  const ansewrs = document.querySelector('.answers').children
  
  async function callQuestion(house) {
    //Fazendo com que as ultimas perguntas sejam da vitoria
    if (house > 19) {
      house = 19
    }
    //Passa o número da casa, a função calcula sozinha qual pergunta usar
    questionContainer.style.height = '100vh'
    var usedBoxes = [0, 1, 2, 3] //Usado para randomizar as perguntas
    const res = await getQuestions() //Pegandos as perguntas dos JSON
    const questions = res.questions
  
    var dificulty = house * 3 + 2 //Passando com + 2 pois são 3 perguntas por casa
  
    while (usedQuestions.includes(dificulty) && dificulty > 0) {
      //Fazendo com que as perguntas não repitam
      dificulty--
    }
  
    questionTitle.innerText = questions[dificulty].question //Escrevendo a pergunta
  
    const answerLoc = Math.floor(Math.random() * 4) //Pegando um indice para a pergunta certa
  
    //Limpandos estilos dos botões
  
    ansewrs[answerLoc].innerText = questions[dificulty].rightAnswer //Escrevendo a pergunta certa
  
    usedBoxes.splice(answerLoc, 1) // Tirando a caixa usada pela pergunta certa
  
    var wrongAnswers = questions[dificulty].wrongAnswers
  
    for (var i = wrongAnswers.length - 1; i > 0; i--) {
      //Randomizando as perguntas erradas
      var j = Math.floor(Math.random() * (i + 1))
      var temp = wrongAnswers[i]
      wrongAnswers[i] = wrongAnswers[j]
      wrongAnswers[j] = temp
    }
  
    usedBoxes.forEach((res, i) => {
      //Escrevendo as perguntas erradas
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
    }, 500)
  }
  
  function closeQuestion() {
    questionContainer.style.height = '0vh'
    for (i = 0; i < ansewrs.length; i++) {
      ansewrs[i].style.backgroundColor = '#fc5e5b'
    }
  }