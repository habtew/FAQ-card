import data from './data.js'

const faq = document.querySelector('.faq-container')

document.body.addEventListener('click', (e)=>{
    if(e.target.closest('.div')){
        e.target.nextElementSibling.classList.toggle('hide');
        e.target.firstElementChild.classList.toggle('rotate-img');

    }
})

data.map(item => {
    let html = ''
    html += `<div class="div" >
            <h3>${item.title}<span><img class="rotate-img" src="./images/icon-arrow-down.svg" alt="arrow down icon"></span></h3>
            <p class="one hide" id="${item.id}">${item.response}</p>
            </div>
             <span class="line"></span>
`
    faq.innerHTML += html
    
}).join('')
