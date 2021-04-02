window.addEventListener('load', start)

//estado inicial o array que recebe os dados que vem do evento no botão
const clickArray = []

function start(){
    handleBtn()
}

function handleBtn(){
    const btn = document.querySelector('#clickButton')

    btn.addEventListener('click', ()=>{
        // const now = new Date()
        // clickArray.push(now)

        clickArray.push(getNewTime())
        // console.log(clickArray)

        fill()
    })
}

//preenchendo as LI's na tela 
function fill(){
    const ul = document.querySelector('#data')

    //zerando todos os valores que podem já estar na ul
    ul.innerHTML = ''

    //com o método map, construo um novo array com os valores que desejo 
    let lis = ' '
    clickArray.map(item =>{
        lis += `<li>${item}</li>`
    })

    ul.innerHTML = lis

    document.title = clickArray.length

}
