/* A persistência fica concentrada neste módulo; não salvamos dados pessoais. */
NovoLar.storage = {
  chave: 'novo-lar-favoritos-v1',
  lerFavoritos() {
    try {
      const dados = JSON.parse(localStorage.getItem(this.chave) || '[]');
      return Array.isArray(dados) ? [...new Set(dados.filter(nome => ['Thor', 'Bento'].includes(nome)))] : [];
    } catch { return []; }
  },
  salvarFavoritos(nomes) {
    localStorage.setItem(this.chave, JSON.stringify(nomes));
  }
};
