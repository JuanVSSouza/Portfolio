const contatoBtn = document.querySelector('#contateBtn')
const fecharContateBtn = document.querySelector('#fecharContateBtn')

const secaoContate = document.querySelector('.rodape__contate')
const formContate = document.querySelector('.form__contato')

const imgTec = document.querySelectorAll('.imagem')

imgTec.forEach((imagem) =>

    imagem.addEventListener('mouseover', (e) => {
        // console.log(e.currentTarget.style.width = '110px')
    })

)

function mostrarContate() {
    secaoContate.style.display = 'flex'
    contatoBtn.style.display = 'none'
}

function fecharContate() {
    secaoContate.style.display = 'none'
    contatoBtn.style.display = 'flex'
    fecharContateBtn.style.display = 'none'
}

contatoBtn.addEventListener('click', () => {
    mostrarContate()
    fecharContateBtn.style.display = 'flex'
})

fecharContateBtn.addEventListener('click', () => {
    fecharContate()
})