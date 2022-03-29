


const btnMobile = document.getElementsByClassName('button');

export  function toggleMenu(){
    const lista = document.getElementsByClassName('lista-cabecalho');

    lista.classList.toogle('active')
}

btnMobile.addEventListener('click', toggleMenu)