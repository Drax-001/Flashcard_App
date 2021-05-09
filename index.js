const addBtn = document.getElementById('add')
const cancelBtn = document.getElementById('cancel')
const que = document.getElementById('que')
const ans = document.getElementById('ans')
const cards = document.getElementById('cards')

addBtn.addEventListener('click', create)
cancelBtn.addEventListener('click', () => {
    que.value = ''
    ans.value = ''
})

function create() {
    if (que.value !== '' && ans.value !== '') {
        createElements()
    }

    que.value = ''
    ans.value = ''
}

function createElements() {

    // card
    var card = document.createElement('div');
    card.setAttribute('class', 'card outline')

    // edit div
    var editDiv = document.createElement('div')
    editDiv.setAttribute('class', 'edit')
    var editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'editBtn')
    editBtn.innerHTML = 'Edit'
    editBtn.addEventListener('click', edit)
    function edit() {
        if (editBtn.innerHTML == 'Edit') {
            question.setAttribute('contenteditable', true)
            answer.setAttribute('contenteditable', true)
            question.focus()
            editBtn.innerHTML = 'Done'
            if (answer.style.display == 'none') {
                showHide()
            }
        }
        else if (editBtn.innerHTML == 'Done') {
            question.setAttribute('contenteditable', false)
            answer.setAttribute('contenteditable', false)
            editBtn.innerHTML = 'Edit'
            showHide()
        }
    }

    // queAndAnsCont
    var queAndAnsCont = document.createElement('div')

    // question
    var question = document.createElement('h4')
    question.setAttribute('class', 'question')
    question.innerHTML = que.value;

    // answer
    var answer = document.createElement('h4')
    answer.setAttribute('class', 'answer')
    answer.style.display = 'none'
    answer.innerHTML = ans.value;

    // buttonCont
    var buttonCont = document.createElement('div')
    buttonCont.setAttribute('class', 'buttonCont')

    // show button
    var show = document.createElement('button')
    show.setAttribute('class', 'buttons outline')
    show.innerHTML = 'Show Answer'

    show.addEventListener('click', showHide)
    function showHide() {
        if (answer.style.display == 'none') {
            answer.style.display = 'block'
            show.innerHTML = 'Hide answer';
        }
        else if (answer.style.display == 'block') {
            answer.style.display = 'none'
            show.innerHTML = 'Show answer';
        }
    }

    // remove
    var remove = document.createElement('button')
    remove.setAttribute('class', 'buttons outline')
    remove.innerHTML = 'Delete'

    remove.addEventListener('click', clear)
    function clear() {
        editDiv.removeChild(editBtn)
        queAndAnsCont.removeChild(question)
        queAndAnsCont.removeChild(answer)
        buttonCont.removeChild(show)
        buttonCont.removeChild(remove)
        card.removeChild(editDiv)
        card.removeChild(queAndAnsCont)
        card.removeChild(buttonCont)
        cards.removeChild(card)
    }

    // appending
    editDiv.appendChild(editBtn)
    queAndAnsCont.appendChild(question)
    queAndAnsCont.appendChild(answer)
    buttonCont.appendChild(show)
    buttonCont.appendChild(remove)
    card.appendChild(editDiv)
    card.appendChild(queAndAnsCont)
    card.appendChild(buttonCont)
    cards.appendChild(card)
}