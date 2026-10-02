/* Navegação e feedback compartilhados pelas três páginas. */
document.documentElement.classList.add("js");
const menu = document.getElementById("menu");
const toggle = document.querySelector(".menu-toggle");
toggle.hidden = false;
function fecharMenu() {
  menu.classList.remove("menu--aberto");
  toggle.setAttribute("aria-expanded", "false");
}
toggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("menu--aberto");
  toggle.setAttribute("aria-expanded", String(aberto));
});
const sub = document.querySelector(".submenu-toggle");
sub.addEventListener("click", () => {
  const item = sub.parentElement;
  const aberto = !item.classList.contains("aberto");
  item.classList.toggle("aberto", aberto);
  item.classList.toggle("fechado", !aberto);
  sub.setAttribute("aria-expanded", String(aberto));
});
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) fecharMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (menu.classList.contains("menu--aberto")) {
      fecharMenu();
      toggle.focus();
    }
    if (sub.parentElement.matches(":focus-within")) {
      sub.parentElement.classList.remove("aberto");
      sub.parentElement.classList.add("fechado");
      sub.setAttribute("aria-expanded", "false");
      sub.focus();
    }
  }
});
sub.parentElement.addEventListener("mouseleave", () =>
  sub.parentElement.classList.remove("fechado"),
);
let tempo;
window.notificar = (mensagem) => {
  const toast = document.querySelector(".toast");
  clearTimeout(tempo);
  toast.textContent = mensagem;
  tempo = setTimeout(() => {
    toast.textContent = "";
  }, 6000);
};
