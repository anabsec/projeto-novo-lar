NovoLar.iniciarFavoritos = function () {
const favoritos = Vue.ref(NovoLar.storage.lerFavoritos());
function sincronizar() {
  document.querySelectorAll(".favoritar").forEach((botao) => {
    const salvo = favoritos.value.includes(botao.dataset.animal);
    botao.setAttribute("aria-pressed", String(salvo));
    botao.textContent = (salvo ? "Remover " : "Salvar ") + botao.dataset.animal;
  });
}
const app = Vue.createApp({
  setup() {
    return () =>
      Vue.h("div", [
        Vue.h(
          "p",
          { role: "status" },
          favoritos.value.length
            ? `Você salvou ${favoritos.value.length} animal(is): ${favoritos.value.join(", ")}.`
            : "Você ainda não salvou nenhum animal. Use o botão Salvar nos cartões.",
        ),
        Vue.h(
          "button",
          {
            disabled: !favoritos.value.length,
            onClick: () => {
              favoritos.value = [];
              persistir();
            },
          },
          "Limpar favoritos",
        ),
      ]);
  },
});
app.mount("#favoritos");
function persistir() {
  sincronizar();
  try {
    NovoLar.storage.salvarFavoritos(favoritos.value);
    window.notificar("Favoritos atualizados neste navegador.");
  } catch {
    window.notificar("Favoritos atualizados apenas nesta sessão.");
  }
}
document.querySelectorAll(".favoritar").forEach((botao) =>
  botao.addEventListener("click", () => {
    const nome = botao.dataset.animal;
    favoritos.value = favoritos.value.includes(nome)
      ? favoritos.value.filter((n) => n !== nome)
      : [...favoritos.value, nome];
    persistir();
  }),
);
sincronizar();

return () => app.unmount();
};
