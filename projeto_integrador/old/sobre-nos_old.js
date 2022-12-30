const quemSomosBtn = document.querySelector(".quem_somos-btn")
const missaoBtn = document.querySelector(".missao-btn")
const visaoBtn = document.querySelector(".visao-btn")
const valoresBtn = document.querySelector(".valores-btn")

quemSomosBtn.addEventListener('click', changeQuemSomos)
missaoBtn.addEventListener('click', changeMissaos)
visaoBtn.addEventListener('click', changeVisao)
valoresBtn.addEventListener('click', changeValores)

function changeQuemSomos(){
    quemSomosBtn.style.color = "whitesmoke";
    quemSomosBtn.style.backgroundColor = "#bca0dd";
}

function changeMissaos(){
    missaoBtn.style.color = "whitesmoke";
    missaoBtn.style.backgroundColor = "#bca0dd";
}

function changeVisao(){
    visaoBtn.style.color = "whitesmoke";
    visaoBtn.style.backgroundColor = "#bca0dd";
}

function changeValores(){
    valoresBtn.style.color = "whitesmoke";
    valoresBtn.style.backgroundColor = "#bca0dd";
}