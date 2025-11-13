// Arquivo: assets/js/scripts.js
// JS moderno para carrossel, notícias, FAB, inserção dinâmica dos cards e banners

document.addEventListener('DOMContentLoaded', () => {
  // Dados demo dos cursos
  const cursos = [
    {
      id: 1,
      titulo: 'Fundamentos da Odontologia Integrada',
      descricao: 'Curso introdutório sobre os principais fundamentos da odontologia moderna.',
      imagem: 'images/curso1.jpg',
      valor: 'R$ 897,00',
      data_inicio: '10/01/2026'
    },
    {
      id: 2,
      titulo: 'Estética Orofacial Avançada',
      descricao: 'Aprenda técnicas inovadoras em estética orofacial com especialistas.',
      imagem: 'images/curso2.jpg',
      valor: 'R$ 1.350,00',
      data_inicio: '17/02/2026'
    },
    {
      id: 3,
      titulo: 'Dentística Restauradora',
      descricao: 'Imersão prática em tratamentos restauradores e reabilitação.',
      imagem: 'images/curso3.jpg',
      valor: 'R$ 1.130,00',
      data_inicio: '15/03/2026'
    }
  ];
  // Insere os cards dos cursos no carrossel da home
  const carrossel = document.getElementById('cursosCarrossel');
  cursos.forEach(curso => {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${curso.imagem}" alt="${curso.titulo}">
      <div class="card-title">${curso.titulo}</div>
      <div class="card-desc">${curso.descricao}</div>
      <div class="card-valor">${curso.valor} <br><span style='font-size:0.93em;color:#777;'>Início: ${curso.data_inicio}</span></div>
    `;
    carrossel.appendChild(card);
  });

  // Dados demo das notícias
  const noticias = [
    {
      id: 1,
      imagem: 'images/noticia1.jpg',
      titulo: 'Novo curso de Estética Orofacial já disponível!'
    },
    {
      id: 2,
      imagem: 'images/noticia2.jpg',
      titulo: '100% de aprovação dos alunos na última turma.'
    },
    {
      id: 3,
      imagem: 'images/noticia3.jpg',
      titulo: 'Inscrições abertas para Dentística Restauradora!'
    }
  ];
  // Insere banners de notícias
  const noticiasBanner = document.getElementById('noticiasBanner');
  noticias.forEach(noticia => {
    let banner = document.createElement('div');
    banner.className = 'noticia-banner';
    banner.innerHTML = `
      <img src="${noticia.imagem}" alt="Notícia">
      <div class="noticia-titulo">${noticia.titulo}</div>
    `;
    noticiasBanner.appendChild(banner);
  });

  // Floating FAB WhatsApp
  const fab = document.getElementById('fabWhatsapp');
  fab.addEventListener('click', () => {
    window.open('https://wa.me/5599999999999', '_blank');
  });
  fab.addEventListener('mouseenter', () => {
    fab.classList.add('hover');
  });
  fab.addEventListener('mouseleave', () => {
    fab.classList.remove('hover');
  });
});
