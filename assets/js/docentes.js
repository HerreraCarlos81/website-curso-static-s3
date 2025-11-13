// assets/js/docentes.js

document.addEventListener('DOMContentLoaded', () => {
  const docentes = [
    {
      nome: 'Profa. Maria Silveira',
      imagem: 'images/professora-placeholder.jpg',
      bio: 'Especialista em Odontologia Integrada, referência nacional com mais de 20 anos de experiência e liderança acadêmica.'
    },
    {
      nome: 'Prof. João Freitas',
      imagem: 'images/docente2.jpg',
      bio: 'Mestre em Estética Orofacial. Atua em pesquisa e ensino inovador na área de harmonização facial.'
    },
    {
      nome: 'Profa. Ana Paula Esteves',
      imagem: 'images/docente3.jpg',
      bio: 'Expert em Dentística Restauradora. Reconhecida pelo trabalho prático com novos métodos odontológicos.'
    }
  ];
  const grid = document.getElementById('docentesGrid');
  docentes.forEach(p => {
    let card = document.createElement('div');
    card.className = 'docente-card';
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <div class="docente-nome">${p.nome}</div>
      <div class="docente-bio">${p.bio}</div>
    `;
    grid.appendChild(card);
  });

  // WhatsApp FAB
  const fab = document.getElementById('fabWhatsapp');
  fab.addEventListener('click', () => window.open('https://wa.me/5599999999999', '_blank'));
  fab.addEventListener('mouseenter', () => fab.classList.add('hover'));
  fab.addEventListener('mouseleave', () => fab.classList.remove('hover'));
});
