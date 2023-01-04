const quemSomosBtn = document.querySelector(".quem_somos-btn")
const missaoBtn = document.querySelector(".missao-btn")
const visaoBtn = document.querySelector(".visao-btn")
const valoresBtn = document.querySelector(".valores-btn")

const divQuemSomos = document.querySelector(".quem_somos-box")
const divMissao = document.querySelector(".missao-box")
const divVisao = document.querySelector(".visao-box")
const divValores = document.querySelector(".valores-box")

quemSomosBtn.addEventListener('click', changeQuemSomos)
missaoBtn.addEventListener('click', changeMissaos)
visaoBtn.addEventListener('click', changeVisao)
valoresBtn.addEventListener('click', changeValores)

function quemSomos(){
divQuemSomos.style.display = "block"
quemSomosBtn.style.color = "whitesmoke";
quemSomosBtn.style.backgroundColor = "#bca0dd";
}
quemSomos();

function clearBtn(){
    quemSomosBtn.style.color = "";
    quemSomosBtn.style.backgroundColor = "";
    missaoBtn.style.color = "";
    missaoBtn.style.backgroundColor = ""; 
    visaoBtn.style.color = "";
    visaoBtn.style.backgroundColor = "";
    valoresBtn.style.color = "";
    valoresBtn.style.backgroundColor = "";
    divQuemSomos.style.display = "none"
    divMissao.style.display = "none"
    divVisao.style.display = "none"
    divValores.style.display = "none"
}





function changeQuemSomos(){
    clearBtn();
    divQuemSomos.style.display = "block"
    quemSomosBtn.style.color = "whitesmoke";
    quemSomosBtn.style.backgroundColor = "#bca0dd";

}

function changeMissaos(){
   clearBtn();
    divMissao.style.display = "block"
    missaoBtn.style.color = "whitesmoke";
    missaoBtn.style.backgroundColor = "#bca0dd";
}

function changeVisao(){
    clearBtn();
    divVisao.style.display = "block"
    visaoBtn.style.color = "whitesmoke";
    visaoBtn.style.backgroundColor = "#bca0dd";
}

function changeValores(){
    clearBtn();
    divValores.style.display = "block"
    valoresBtn.style.color = "whitesmoke";
    valoresBtn.style.backgroundColor = "#bca0dd";
}