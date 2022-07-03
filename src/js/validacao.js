const submitButton = document.querySelector("#submit-button");
const nomeUsuario = document.querySelector("#nome");
const emailUsuario = document.querySelector("#email");
const telefoneUsuario = document.querySelector("#telefone");
const mensagemUsuario = document.querySelector("#mensagem");

const erroMessage = document.querySelectorAll(".validacao");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const nomeValue = nomeUsuario.value;
    const emailValue = emailUsuario.value;

    if(nomeValue === "" || emailValue === "") {
       erroMessage.forEach (element => {
        element.textContent = "campo obrigatório";
        erroMessage.classList = ".validacao";
        return;
       
     });
   }});

  







    
