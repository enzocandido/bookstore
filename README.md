# Aplicação Livraria (Bookstore)

Uma aplicação web moderna para navegar e explorar os livros mais recentes, construída com Angular.

## Visão Geral

Esta aplicação de Livraria permite aos usuários:

- Navegar por uma coleção dos livros mais recentes
- Visualizar detalhes dos livros incluindo título, subtítulo, preço e imagens de capa
- Filtrar a coleção de livros usando os filtros da barra lateral

A aplicação integra-se com a [API IT Bookstore](https://api.itbook.store/) para obter dados reais de livros.

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── bookstore-app/      # Funcionalidade principal da livraria
│   │   │   ├── filters/        # Funcionalidade de filtragem de livros
│   │   │   └── product-list/   # Componentes de listagem de livros
│   │   │       ├── model/      # Modelos de dados de livros
│   │   │       └── product-item/ # Componente de livro individual
│   │   └── shared/             # Componentes compartilhados (cabeçalho, rodapé, navegação)
│   ├── app.component.*         # Arquivos do componente raiz
│   └── app.module.ts           # Módulo principal da aplicação
├── assets/                     # Recursos estáticos
└── environments/               # Configuração de ambiente
```

## Tecnologias Utilizadas

- Angular 14.1.0
- TypeScript
- Bootstrap 5.2.0
- RxJS
- HttpClient para integração com API

## Recursos

- **Listagem de Livros**: Exibe uma grade de livros com seus detalhes
- **Design Responsivo**: Funciona em dispositivos desktop e móveis
- **Integração com API**: Dados em tempo real da API IT Bookstore
- **Arquitetura Baseada em Componentes**: Design modular para facilitar a manutenção

## Como Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/enzocandido/bookstore.git
   cd bookstore
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```
   npm start
   ```

4. Abra seu navegador e acesse `http://localhost:4200/`

## Desenvolvimento

### Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

### Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Informações da API

Esta aplicação utiliza a API IT Bookstore:

- Endpoint de novos lançamentos: `https://api.itbook.store/1.0/new`
- Documentação: [API IT Bookstore](https://api.itbook.store/)
