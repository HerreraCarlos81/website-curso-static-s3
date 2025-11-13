// Arquivo: assets/js/cursos.js
// Dinâmica do grid de cursos, flip cards, search bar

document.addEventListener('DOMContentLoaded', () => {
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

  const gridCursos = document.getElementById('gridCursos');
  function renderCursos(list) {
    gridCursos.innerHTML = '';
    list.forEach(curso => {
      let wrapper = document.createElement('div');
      wrapper.className = 'curso-card-wrapper';
      wrapper.innerHTML = `
        <div class="curso-card">
          <div class="curso-front">
            <img src="${curso.imagem}" alt="${curso.titulo}">
            <div class="curso-card-title">${curso.titulo}</div>
            <div class="curso-card-desc">${curso.descricao}</div>
            <div class="curso-card-valor">${curso.valor} <span class='card-data-inicio'>Início: ${curso.data_inicio}</span></div>
          </div>
          <div class="curso-back">
            <div class="curso-back-content">
              <button class="btn-whatsapp" onclick="window.open('https://wa.me/5599999999999', '_blank');">Tire dúvidas pelo WhatsApp</button>
              <button class="btn-pix" onclick="alert('Chave PIX do curso: 000.111.222-33')">Adquirir curso</button>
              <button class="btn-voltar">&lt; Voltar</button>
            </div>
          </div>
        </div>
      `;
      gridCursos.appendChild(wrapper);
      // Flip
      const card = wrapper.querySelector('.curso-card');
      card.querySelector('.curso-front').addEventListener('click', () => {
        card.classList.add('flipped');
      });
      card.querySelector('.btn-voltar').addEventListener('click', () => {
        card.classList.remove('flipped');
      });
    });
  }
  renderCursos(cursos);

  const searchBox = document.getElementById('searchCursos');
  searchBox.addEventListener('input', e => {
    const text = e.target.value.toLowerCase();
    const filtered = cursos.filter(curso =>
      curso.titulo.toLowerCase().includes(text) ||
      curso.descricao.toLowerCase().includes(text)
    );
    renderCursos(filtered);
  });

  // Mesh WhatsApp FAB
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
