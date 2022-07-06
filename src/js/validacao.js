const formulario = document.getElementById("formulario");
const inputForm = document.querySelectorAll ( ".input");
const mensagemErro= document.getElementsByClassName('validacao')

formulario.addEventListener("submit", function (e) {
     inputForm.forEach(function (input, indice){
      if(input.value == ""){
        input.classList.remove("correto")
        input.classList.add("erro")
        mensagemErro[indice].classList.add("mostrar-mensagem")
        e.preventDefault() 
      }else{
        input.classList.remove("erro")
        input.classList.add("correto")
        mensagemErro[indice].classList.remove("mostrar-mensagem")
        e.preventDefault() 
      }
     })
     return
})

  







    
