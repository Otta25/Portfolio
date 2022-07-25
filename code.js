
let slider = document.querySelector("#slider");
let contador = 0;
window.sr = ScrollReveal()

setInterval(cambiarImagen, 6000);

function cambiarImagen() {
 contador++
 slider.style.backgroundImage=`url(assets/slider${contador}.jpg)`
 if(contador===4){
    contador=0
 }
};


sr.reveal('header',{
   duration:1000,
   origin:'bottom',
   distance:'-100px'
})
  
sr.reveal('#info_contacto',{
   duration:1000,
   origin:'bottom',
   distance:'-100px'
})
  

sr.reveal('#section_albion2',{
   duration:1000,
   origin:'bottom',
   distance:'-100px'
})
  

sr.reveal('#section_albion4',{
   duration:1000,
   origin:'bottom',
   distance:'-100px'
})
  