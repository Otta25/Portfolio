let header = document.querySelector('header')
let slider = document.querySelector("#slider");
let contador = 0;
window.sr = ScrollReveal()

setInterval(cambiarImagen, 6000);

window.addEventListener('scroll', hideHeader)



function hideHeader(){
   if(scrollY>300){
      header.style.backgroundColor='transparent'
      header.style.boxShadow='none'
      console.log('HOLA')
   }
   else{
      header.style.backgroundColor='rgb(2, 2, 51)'
      header.style.boxShadow='0.1rem 0rem 1rem black'
   }
}


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
  