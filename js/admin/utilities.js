import { getTalksLS } from "../chatLS.js";

export const saveTalks = (talk) => {
  const talks = getTalksLS(); 
  talks.push(talk);
  localStorage.setItem("talks", JSON.stringify(talks));
  console.log("si se guardo")
  
};


export const addCardTalks = (talk) => {             
    const card = document.getElementById("cardContainer");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("container", "row", "bg-dark", "m-0");
  
    const cardTitle = document.createElement("div");
    cardTitle.classList.add(
      "col-12",
      "d-flex",
      "justify-content-start",
      "gap-4",
      "mt-3"
    );
  
  
    const cardTitleDiv = document.createElement("div");
    cardTitleDiv.classList.add("d-flex", "flex-column", "text-light");
  
    const titleCard = document.createElement("h5");
    titleCard.innerText = talk.title;
  
   
  
    
    cardTitle.appendChild(cardTitleDiv);
  
    //imagen
    const imgCardDiv = document.createElement("div");
    imgCardDiv.classList.add("col-6");
  
    const imgCard = document.createElement("img");
    imgCard.classList.add("img-fluid");
    imgCard.src = talk.image;
    imgCard.alt = talk.title;
    imgCardDiv.appendChild(imgCard);
  
    //botones
    const btnsDiv = document.createElement("div");
    btnsDiv.classList.add("col-6", "d-flex", "flex-column", "gap-3", "mb-3", 'align-items-center');
  
    const btnEdit = document.createElement("button");
    btnEdit.classList.add('btn', 'btn-warning', 'btn-sm', 'w-50');
    btnEdit.innerText = "Editar";
    btnEdit.onclick = () => {
      
    };
  
    const btnDelete = document.createElement("button");
    btnDelete.classList.add('btn', 'btn-danger', 'btn-sm', 'w-50');
    btnDelete.innerText = "Eliminar";
    btnDelete.onclick = () => {
      
    };
  
  
    btnsDiv.appendChild(btnEdit);
    btnsDiv.appendChild(btnDelete);
  
    
    
  
    
  
    cardBody.appendChild(titleCard);
    cardBody.appendChild(imgCardDiv);
    cardBody.appendChild(btnsDiv);
   
  
    card.appendChild(cardBody);
  };

export const loadTable = ()=>{
    const talk = getTalksLS();
    console.log("hola")

    const card = document.getElementById("cardContainer");
    card.innerHTML= " ";

    talk.forEach((talks,index)=>{
        addCardTalks(talks,index)
    })
}

export const editingChats = (id)=>{
    // 1. Traer lista
    const talks = getTalksLS();
  
    // 2. Buscar la pelicula a editar
    const talkSelect = talks.find(item => item.id === id);
  
    // 3. Seleccionar los elementos (campos)
    const title = document.getElementById("title");
    const hourChat = document.getElementById("hour");
    const speaker = document.getElementById("speaker");
    const image = document.getElementById("image");
    
    // 4. Cargar los datos en el formulario
  
    title.value = talkSelect.title;
    hourChat.value = talkSelect.hour;
    speaker.value = talkSelect.speaker;
    image.value = talkSelect.image;
  
    // 5. Guardar codigo
    sessionStorage.setItem('idTalk',id);
  
  }
  
  export const isEditingChat = ()=>{
    const id = sessionStorage.getItem('idTalk');
  
    if(id === null){
      return false;
    }else {
      return true;
    }
  } 
