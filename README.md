# Exercício – Site de Receitas com Template Engine

## 🎯 Objetivo
Praticar a construção de um site com renderização no lado do servidor (Server-Side Rendering) utilizando Node.js, Express e a template engine Handlebars.

## 📝 Descrição
Neste exercício, você irá evoluir um site de receitas existente. Os dados das receitas já estão disponíveis em um serviço (`src/services/receitasService.ts`). 

Sua tarefa é implementar as seguintes rotas e funcionalidades no servidor Express:

- **`GET /` (Página Principal):** Deve exibir uma lista **paginada** de todas as receitas.
  - A página deve mostrar no máximo 10 receitas por vez.
  - A navegação entre as páginas deve ser implementada via query string (ex: `/?page=1`, `/?page=2`).
  - Se nenhum número de página for fornecido, a primeira página deve ser exibida.

- **`GET /receitas/:id` (Detalhes da Receita):** Deve exibir a página de detalhes de uma única receita.
  - A página deve mostrar o título, imagem, ingredientes e modo de preparo da receita correspondente ao `id` fornecido.

- **Rota de "Not Found" (404):** Deve ser configurada uma rota que capture qualquer URL não definida e exiba uma página de erro 404 amigável.

## 🚀 Como Executar
Para iniciar o ambiente de desenvolvimento, execute os seguintes comandos no terminal:

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor em modo de desenvolvimento
npm run dev
```
O servidor estará disponível em `http://localhost:8083`.

## ✅ Requisitos
- Utilizar o framework **Express** para criar e gerenciar as rotas.
- Implementar a rota principal (`/`) com lógica de **paginação**.
- Implementar uma rota dinâmica (`/receitas/:id`) para exibir os detalhes de uma receita específica.
- Utilizar **Handlebars** para renderizar dinamicamente o conteúdo das páginas HTML.
- Criar uma rota de *fallback* para tratar erros 404 (página não encontrada).

## 🌟 Desafio Extra
- Crie uma funcionalidade de busca. Implemente uma rota `GET /search` que receba um termo de busca via query string (ex: `/search?q=bolo`). A página deve exibir todas as receitas cujo título contenha o termo pesquisado.

## 🚚 Entrega
- Ao finalinzar o desenvolvimento não se esqueça de preencher o [relatório de entrega](https://forms.gle/8hXR5AKgRZ7C57gNA)