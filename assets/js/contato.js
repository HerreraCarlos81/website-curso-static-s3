// assets/js/contato.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contatoForm');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.textContent = 'Mensagem enviada! Em breve entraremos em contato.';
    msg.style.color = '#A596B8';
    form.reset();
    setTimeout(() => msg.textContent = '', 4000);
  });
  const fab = document.getElementById('fabWhatsapp');
  fab.addEventListener('click', () => window.open('https://wa.me/5599999999999', '_blank'));
  fab.addEventListener('mouseenter', () => fab.classList.add('hover'));
  fab.addEventListener('mouseleave', () => fab.classList.remove('hover'));
});
