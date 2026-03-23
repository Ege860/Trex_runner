const dino = document.getElementById("dino");
function jump(){
  if (dino.classList != "jump"){

  
  dino.classlist.add("jump");
  setTimeout(function (){
    dino.classList.remove("jump");
  }, 300)
}
}
document.addEventListener("keydown",function (event){
jump();
} )

