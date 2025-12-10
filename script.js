const btnMenu = document.getElementById('menu-hamburguer');
const navMenu = document.getElementById('menu');
const menuLinks = navMenu.querySelectorAll('a');

btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  btnMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    btnMenu.classList.remove('active');
  });
});

//funcionamento botão "copiar link"
document.getElementById('copiarLink').addEventListener('click', () => {
  const link = 'https://127.0.0.1:5500/index.html#inicio'; //trocar pra quando subir pro github

  navigator.clipboard.writeText(link).then(() => {
    alert('Link copiado!');
  });
});


//inscrição
document.getElementById('formInscricao').addEventListener('submit', function(e){
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cidade = document.getElementById('cidade').value;

  const numero = "5511123456789";

  let mensagem = `Olá! Quero participar do Evento 'Movimento Futuro'.%0A%0A`;
  mensagem += `Nome: ${nome}%0A`;
  mensagem += `Idade: ${idade}%0A`;
  if (cidade) mensagem += `Cidade/Bairro: ${cidade}%0A`;

  const linkInscricao = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(linkInscricao, "_blank");
});