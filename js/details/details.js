import getTalksLS from '';

document.addEventListener("DOMContentLoaded", () => {
   
    const talks = sessionStorage.getItem("peliculaSeleccionada");
  
    if (peliculas) {
      
      const pelicula = JSON.parse(peliculas);
  
     
      mostrarDetallesDePelicula(pelicula)
    } else {
      
      console.log("No se encontraron detalles de película en sessionStorage.");
    }
  });
  


  export const mostrarDetallesDePelicula = (pelicula)=>{
    const tituloPelicula = document.getElementById('tituloPelicula');
    const descripcionPelicula = document.getElementById('descripcionPelicula')
    const caracteristicasPelicula = document.getElementById('caracteristicasPelicula')
    const portadaPelicula = document.getElementById('portadaPelicula');
    const caratulaPelicula =document.createElement('img');
    caratulaPelicula.src = pelicula.caratula;
    caratulaPelicula.alt = pelicula.titulo;

    portadaPelicula.appendChild(caratulaPelicula);

    tituloPelicula.innerText = pelicula.titulo;

    const generoPelicula = document.createElement('a')
    const tipoPelicula = document.createElement('a');

    generoPelicula.innerText = pelicula.genero;
    tipoPelicula.innerText = pelicula.tipo;

    descripcionPelicula.innerText = pelicula.descripcion;

    caracteristicasPelicula.appendChild(generoPelicula)
    caracteristicasPelicula.appendChild(tipoPelicula)

  
   
    
  }