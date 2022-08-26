window.addEventListener('scroll', function() {
    const header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function barMenu(){
   const x = document.querySelector(".nav");
   if(x.style.display ==="none"){
       x.style.display = "block";
   }else{
       x.style.display = "none"
   }
}