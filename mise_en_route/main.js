const quizzData = [
    {
        question:'Quelle est la date de sortie du jeu League of Legends?',
        a:'2007',
        b:'2009',
        c:'2011',
        d:'2013',
        correct:'b'
    },
    {
        question:'Combien de personnages sont jouables dans le jeu Super Smash Bros Ultimate?',
        a:'74',
        b:'77',
        c:'81',
        d:'84',
        correct:'c'
    },
    {
        question:'Combien de temps dure un match de Rocket League?',
        a:'5 minutes',
        b:'6 minutes',
        c:'7 minutes',
        d:'8 minutes',
        correct:'a'
    }
];

const question = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const check_one = document.getElementById("a")
const check_two = document.getElementById("b")
const check_three = document.getElementById("c")
const check_four = document.getElementById("d")
const input = document.querySelectorAll("input")
const end = document.getElementById('end')
const ul = document.querySelector('ul')
const modal = document.getElementById('modal')
const score = document.querySelector('.score')
const comm = document.querySelector('.commentaire')

let quizzIndex = 0
let points = 0

onLoadQuizz()
ifAnswer()

function onLoadQuizz() {
    question.innerText = quizzData[quizzIndex].question
    a_text.innerText = quizzData[quizzIndex].a
    b_text.innerText = quizzData[quizzIndex].b
    c_text.innerText = quizzData[quizzIndex].c
    d_text.innerText = quizzData[quizzIndex].d
    for (let i = 0; i < input.length; i++) {
        input[i].checked = false
    }

}

function ifAnswer() {
    end.addEventListener('click', () => {
        if(check_one.checked || check_two.checked || check_three.checked || check_four.checked) {
            if(quizzIndex < quizzData.length - 1) {
                checkAnswer()
                quizzIndex++
                onLoadQuizz()
            } else {
                checkAnswer()
                question.innerText = ""
                ul.style.display = "none" 
                end.innerText = "Recommencer"
                modal.style.display = "flex"
                score.innerText = points
                console.log("oui")

                if(points <= 1) {
                    comm.innerText = "Tu es claqué au sol !"
                } else if(points == 2) {
                    comm.innerText = "Bravo, tu as le même QI que Teemo."
                } else if(points == 3) {
                    comm.innerText = "Whouah ! Je m'incline !"
                }

                end.addEventListener('click', () => {
                    location.reload()
                })
            }
        }
    })
}

function checkAnswer() {
    let inputChecked = ""
    console.log(input)
    for (let i = 0; i < input.length; i++) {
        if(input[i].checked) {  
            inputChecked = input[i].id
        }
    }
    
    console.log(quizzData[quizzIndex].correct, inputChecked)
    
    if(quizzData[quizzIndex].correct == inputChecked) {
        points++
        console.log("points +1")
    }
}