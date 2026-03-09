// JavaScript simples (opcional)
// Pode ser usado para métricas ou eventos

console.log("Site carregado com sucesso");

const btn = document.querySelector('.btn-whatsapp');

if (btn) {
  btn.addEventListener('click', () => {
    console.log('Usuário clicou no botão do WhatsApp');
  });
}
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});