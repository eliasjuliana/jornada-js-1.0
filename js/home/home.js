import { getTalksLS } from "../chatLS.js";

const showTalk = (talk) =>{
const container = document.getElementById("container");
const div = document.createElement("div");
div.classList.add("card");


const title = document.createElement('h5');
title.classList.add('title', 'text-center', 'fs-3')
title.innerText = talk.title;
div.appendChild(title);

const img = document.createElement('img')
img.src = talk.image;
img.alt = talk.title;
div.appendChild(img);

const btnVerMas = document.createElement('button');
btnVerMas.classList.add('btn', 'btn-danger', 'm-2');
btnVerMas.innerText=('Ver mas');
btnVerMas.addEventListener('click', ()=>{
    sessionStorage.setItem('charlaselec', JSON.stringify(talk));
    window.location.href='./pages/detail.html';
})

div.appendChild(btnVerMas);
console.log(div)
container.appendChild(div);
}

 const imgTable = ()=>{
    const talk = getTalksLS();
    console.log(talk)
    

    const div = document.getElementById("container");
    div.innerHTML= " ";

    talk.forEach((talks)=>{
        showTalk(talks)
    })
}

imgTable();
