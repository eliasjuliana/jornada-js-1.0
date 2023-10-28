import { getTalksLS } from "../chatLS.js";
import { Talks } from "./talks.js";
import { saveTalks } from "./utilities.js";

export const save = (title, hour, speaker, image) => {
  const newTalks = new Talks(title, hour, speaker, image);
    
  saveTalks(newTalks);
};
 
// metodo para eliminar una charla !

export const detelteTalks = (idTalks) => {
  swal
    .fire({
      title: "¿Estas seguro?",
      text: "Esta opcion no será reversible",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar",
    })
    .then((action) => {
      if (action.isConfirmed) {
        const talks = getTalksLS();
        const searchChat = talks.filter((item) => item.idTalks !== idTalks);

        localStorage.setItem("talks", JSON.stringify(searchChat));

        swal.fire({
          title: "Exito",
          text: "La charla se elimino correctamente",
          icon: "success",
        });

        cargarTabla();
      }
    });
};

export const isEditingTalks = (title, hour, speaker, image)=>{
    const talksId = sessionStorage.getItem('idTalks')
    const talks = getTalksLS();

    if(!talks){
        swal.fire
({
      title: 'Error',
      text: 'No se encontró la charla',
      icon: 'error',
    });
    return;
  }
  const talkPosition = talks.findIndex(
    (item) => item.talksId === talksId
  );
  // 2. Buscar posicion de la pelicula

  if(talkPosition === -1){
    
swal.fire
({
      title: 'Error',
      text: 'No se encontró la charla',
      icon: 'error',
    });
    return;
  }

  // 3. Crear el pelicula editado
  const talkEditing = new Talks(title, hour, speaker, image);

  // 4. Eliminar pelicula anterior y agregar el nuevo
  talks.splice(talkPosition,1,talkEditing);

  // 5. Guardar en LS
  localStorage.setItem('talks',JSON.stringify(talks));

  // 6. Mostrar mensaje de exito
  
swal.fire
({
    title: 'Exito',
    text: 'La charla se modifico correctamente!',
    icon: 'success',
  });
  // 7. Resetear estado previo a edicion
  sessionStorage.removeItem('idTalks');
}


