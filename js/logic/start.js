const menu = document.querySelector('.menuContainer')
const playersDiv = document.querySelector('.players')
const icons = playersDiv.querySelectorAll('.selectIcon')

const playerIcons = ['♥', '♣', '♦', '♠']
var selectedIcons = []

var generatedNames = [],
  i = names.length

while (i > 2) {
  const j = Math.floor(Math.random() * i)
  generatedNames.push(names[j])
  names.splice(j, 1)
  i--
}

generatedNames.forEach(
  (name, i) => (playersDiv.querySelectorAll('.info')[i].value = name)
)

icons.forEach((elem, player) => {
  //Criando os icones para serem selecionados
  for (let i = 0; i < 2; i++) {
    const span = document.createElement('span')
    span.innerText = playerIcons[i]
    span.addEventListener('click', () => selectIcon(playerIcons[i], player))
    elem.querySelector('.icons').appendChild(span)
  }
})

function selectIcon(icon, player) {
  //Colocando o icone no array de icones selecionados na ordem dos jogadores
  selectedIcons.forEach((elem, i) => {
    if (icon == elem) {
      selectedIcons.splice(i, 1)
    }
  })
  selectedIcons[player] = icon

  for (i = 0; i < icons.length; i++) {
    const elements = icons[i].querySelector('.icons').children
    for (let j = 0; j < elements.length; j++) {
      const element = elements[j]
      element.classList.remove('selected')
      element.classList.add('disabled')
    }
  }

  console.log(selectedIcons)

  selectedIcons.forEach((ico, i) => {
    //Colocando selected nos icones selecionatos
    icons[i]
      .querySelector('.icons')
      .children[playerIcons.indexOf(ico)].classList.add('selected')
    playersDiv.querySelectorAll('[name="naipe"]')[i].value =
      playerIcons.indexOf(ico)
  })
}

function startGame() {
  callOverlay('players')
}