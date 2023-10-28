// import { getTalksLS } from "../chatLS"

const createTalkDescription = (talk) => {
console.log(talk);
const container = document.getElementById('detail-container');

const title = document.createElement('h2');
title.innerText = talk.title;

const img = document.createElement('img');
title.innerText = talk.image;

const speaker = document.createElement('h2');
speaker.innerText = talk.speaker;

const description = document.createElement('h2');
title.innerText = talk.description;

container.appendChild(title);
container.appendChild(img);
container.appendChild(speaker);
container.appendChild(description);
}

document.addEventListener("DOMContentLoaded",()=>{
    const talk = sessionStorage.getItem('charlaselec');
    if(talk){
        const talks = JSON.parse(talk)
        createTalkDescription(talks);
    }
})



