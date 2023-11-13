const overlay = document.querySelector('.overlay')
const node = overlay.childNodes
const config = []

overlay.querySelector('.close').addEventListener('click', closeOverlay)

function clearOverlay() {
  node.forEach(elem => {
    //Deixando todos os elementos de config com display none e colocando no array config
    if (elem.tagName === 'DIV') {
      elem.style.display = 'none'
      config.push(elem)
    }
  })
}

function callOverlay(element) {
  //Pra chamar essa função, basta criar uma div dento do overlay com uma classe
  //e passar o nome da classe como parâmetro
  config.forEach(elem => {
    if (elem.classList.contains(element)) {
      elem.style.display = 'block'
    }
  })
  overlay.classList.remove('fade-out')
  overlay.classList.add('fade-in')
}

function closeOverlay() {
  overlay.classList.remove('fade-in')
  overlay.classList.add('fade-out')
  clearOverlay()
}

clearOverlay() //Limpando o overlay assim que gera ele
