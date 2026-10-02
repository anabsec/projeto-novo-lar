/* Máscaras e validação: os dados pessoais não são armazenados. */
NovoLar.iniciarCadastro = function () {
const formulario = document.getElementById("formulario");
const cpf = document.getElementById("cpf"),
  telefone = document.getElementById("telefone"),
  cep = document.getElementById("cep");
cpf.addEventListener("input", () => {
  cpf.value = cpf.value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
});
telefone.addEventListener("input", () => {
  const n = telefone.value.replace(/\D/g, "").slice(0, 11);
  if (n.length <= 2) {
    telefone.value = n;
    return;
  }
  const numero = n.slice(2),
    corte = numero.length > 8 ? 5 : 4;
  telefone.value = `(${n.slice(0, 2)}) ${numero.slice(0, corte)}${numero.length > corte ? "-" + numero.slice(corte) : ""}`;
});
cep.addEventListener("input", () => {
  cep.value = cep.value
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
});
const nascimento = document.getElementById("nascimento");
const hoje = new Date();
nascimento.max = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;
function mostrarEstado(input) {
  input.classList.add("tocado");
  input.setAttribute("aria-invalid", String(!input.validity.valid));
  let mensagem = document.getElementById("erro-" + input.id);
  if (!mensagem) {
    mensagem = document.createElement("span");
    mensagem.className = "erro-campo";
    mensagem.id = "erro-" + input.id;
    input.parentElement.append(mensagem);
    input.setAttribute(
      "aria-describedby",
      (
        (input.getAttribute("aria-describedby") || "") +
        " " +
        mensagem.id
      ).trim(),
    );
  }
  mensagem.textContent = input.validity.valid ? "" : input.validationMessage;
}
formulario.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", () => mostrarEstado(input));
  input.addEventListener("input", () => {
    if (input.classList.contains("tocado")) mostrarEstado(input);
  });
  input.addEventListener("invalid", () => mostrarEstado(input));
});
const modal = document.getElementById("confirmacao");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  window.notificar("Campos validados nesta demonstração.");
  modal.showModal();
  document.getElementById("fechar-modal").focus();
});

};
