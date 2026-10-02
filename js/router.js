/* Router por hash: suporta voltar/avançar e links diretos em hospedagem estática. */
(() => {
  const main = document.getElementById('conteudo');
  const titulos = { inicio: 'Adoção responsável', projetos: 'Nossos projetos', cadastro: 'Cadastro' };
  let limparView = null;
  let rotaAtual = '';
  function renderizar() {
    const partes = location.hash.slice(2).split('/');
    const rota = Object.hasOwn(NovoLar.templates, partes[0]) ? partes[0] : 'inicio';
    if (location.hash === '#conteudo') { main.focus(); return; }
    if (rota !== rotaAtual) {
      if (limparView) limparView();
      limparView = null;
      main.innerHTML = NovoLar.templates[rota];
      rotaAtual = rota;
      if (rota === 'inicio') limparView = NovoLar.iniciarFavoritos();
      if (rota === 'cadastro') NovoLar.iniciarCadastro();
      document.title = titulos[rota] + ' | Projeto Novo Lar';
      document.querySelectorAll('.menu a').forEach(link => {
        if (link.hash.split('/')[1] === rota) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      main.focus({preventScroll: true});
    }
    const alvo = partes[1] ? document.getElementById(decodeURIComponent(partes[1])) : null;
    if (alvo) alvo.scrollIntoView(); else window.scrollTo(0, 0);
  }
  document.getElementById('fechar-modal').addEventListener('click', () => document.getElementById('confirmacao').close());
  window.addEventListener('hashchange', renderizar);
  renderizar();
})();
