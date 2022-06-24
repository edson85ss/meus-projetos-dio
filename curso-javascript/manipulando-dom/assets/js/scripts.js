const corpoPagina = document.getElementById('corpo')
const rodapePagina = document.getElementById('rodape')
const tituloPagina = document.getElementById('page-title')

const botao = document.getElementById("mode-selector")
botao.addEventListener("click", ativaDarkMode)

function ativaDarkMode(){
    corpoPagina.classList.toggle("dark-mode");
    rodapePagina.classList.toggle("dark-mode");
    botao.classList.toggle("dark-mode");
    
    if (tituloPagina.innerHTML === "Light Mode ON") {
        tituloPagina.innerHTML = "Dark Mode ON";
      } else {
        tituloPagina.innerHTML = "Light Mode ON";
      }

      if (botao.innerHTML === "Dark Mode") {
        botao.innerHTML = "Light Mode";
      } else {
        botao.innerHTML = "Dark Mode";
      }

}
