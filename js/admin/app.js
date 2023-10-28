import { isEditingTalks, save } from "./abm.js";
import { isEditingChat, loadTable} from "./utilities.js";
import { validateHourChat, validateImage, validateSpaker, validateTitle } from "./validate.js";


loadTable();
const title = document.getElementById("title");
const hourChat = document.getElementById("hour");
const speaker = document.getElementById("speaker");
const image = document.getElementById("image");
const formsChat = document.getElementById('formsChat');
const description = document.getElementById("description")


title.addEventListener("blur", (e) => {
    const value = e.target.value;
  
    validateTitle(value, title);
  });
  description.addEventListener("blur", (e) => {
    const value = e.target.value;
  
    validateTitle(value, description);
  });

  hourChat.addEventListener("blur", (e) => {
    const value = e.target.value;
  
    validateHourChat(value, hourChat);
  });

  speaker.addEventListener("blur", (e) => {
    const value = e.target.value;
  
    validateSpaker(value, speaker);
  });

  image.addEventListener("blur", (e) => {
    const value = e.target.value;
  
    validateImage(value, image);
  });

  formsChat.addEventListener('submit',(e)=>{
    e.preventDefault();

    const titleChat = title.value;
    const hour = hourChat.value;
    const spekearChat = speaker.value;
    const imageChat = image.value;
    const desc = description.value;
    console.log(titleChat)
         
    if(validateTitle(titleChat,title) && validateHourChat(hour,hourChat) && validateSpaker(spekearChat,speaker) && validateImage(imageChat,image) ){

        const isEditing = isEditingChat()
        if(isEditing){
            isEditingTalks(titleChat,hour,spekearChat,imageChat,)
        }else{
            save(titleChat,hour,spekearChat,imageChat,desc)
        } loadTable();
        formsChat.reset();
    }
    title.classList.remove('is-valid', 'is-invalid');
    hourChat.classList.remove('is-valid', 'is-invalid');
    speaker.classList.remove('is-valid', 'is-invalid');
    image.classList.remove('is-valid', 'is-invalid');
  })