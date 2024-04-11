const cardArray =[
    {
        name: 'fries',
        img: 'images/fries.png', 
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog.png',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/icecream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name:'white',
        img: 'images/white.png',
    },
    {
        name:'blank',
        img: 'images/blank.png',
    }
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i< cardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id',i)
      card.addEventListener('click', flipCard)
      gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const card = document.querySelectorAll('#grid img')
    console.log('check for match')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds [1]
    if(optionOneId == optionTwoId){
        alert('you have clicked on same image!')
    }
    if(cardsChoosen[0] == cardsChoosen[1]){
        alert('you found a match')
        card[optionOneId[0]].setAttribute('src', 'image/blank.png')
        card[optionTwoId[1]].setAttribute('src', 'image/blank.png')
        card[optionOneId[0]].removeEventListener('click', flipCard)
        card[optionTwoId[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChoosen)
    }else{
        card[optionOneId[0]].setAttribute('src', 'image/blank.png')
        card[optionTwoId[0]].setAttribute('src', 'image/blank.png')
        alert('try again')
    }
    resultDisplay.innerHTML = cardsWon.length
     cardsChoosen = []
     cardsChoosenIds = []
    
     if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.innerHTML = 'congratulations you found them all'
     }
    }
     

function flipCard(){
    const cardId = this.getAttribute('data-Id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    console.log(cardsChoosen)
    console.log(cardsChoosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}