# Projeto Novo Lar — Experiência Prática III
SPA com templates JavaScript, navegação por hash, Vue 3, validação de formulário e favoritos persistidos em localStorage.

## Executar
Abra a pasta no VS Code e abra index.html com Live Server. Alternativa: `python -m http.server 8090` nesta pasta e acesse http://localhost:8090. A entrada da raiz encaminha para html/index.html preservando a rota.

## Organização
- html/index.html: documento principal, menu, área de conteúdo, modal e scripts.
- css/style.css: variáveis, layout responsivo e estados visuais.
- imagens/: fotos JPG e WebP de Thor e Bento.
- js/templates.js: conteúdo HTML confiável de início, projetos e cadastro.
- js/router.js: troca de templates, títulos, foco, rotas e histórico.
- js/app.js: menu e notificações.
- js/storage.js: leitura e escrita de favoritos.
- js/favoritos.js: componente Vue e eventos nos cartões.
- js/cadastro.js: máscaras, mensagens de validação e confirmação.
- js/vendor/vue.global.prod.js: Vue 3.5.13 (MIT).

## Rotas
html/index.html#/inicio, #/projetos e #/cadastro. Sufixos como #/projetos/doacoes levam à seção correspondente. A troca entre views não recarrega o documento. Templates são escritos pelo desenvolvedor, sem interpolar dados pessoais em innerHTML. Ao sair do início, o componente Vue é desmontado.

## Dados e limites
localStorage guarda somente favoritos. Cadastro é demonstrativo: valida dados fictícios, abre modal e não envia nem persiste dados pessoais. CPF valida formato, não dígitos verificadores. Não há backend. Canais de contato reais continuam pendentes. Esta versão separada mantém intacta a entrega HTML/CSS anterior. A avaliação pode exigir recursos adicionais nas próximas telas.
