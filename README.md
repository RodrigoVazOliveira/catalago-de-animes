# Catálago de animes usando API Kitsu

Possui o intuito de ter um catálogo de animes para que qualquer pessoa tenha acesso de maneira fácil, simplificado e com recursos para facilitar.

---

Para isso, a aplicação vai consumir a API da Kitsu.

URL: [https://kitsu.io/api/edge](https://kitsu.io/api/edge)

documentação: [https://kitsu.docs.apiary.io/](https://kitsu.docs.apiary.io/)

---

### Rotas da aplicação:

| Rota | Página              | Descrição                          |
|------|---------------------|------------------------------------|
| /    | Página incial       | Página inicial contendo, menus e menus de acessbilidade|
| /list | Página contento uma tabela com os animes | Uma tabela listando 20 animes por página |
| /category | página de categorias de animes | página que listas categorias e ao clicar em categoria será listados alguns dos animes nessa categoria |
| /about | página de sobre o aplicativo | mostrnado a página no github, e quem criou e contato para sugestões. |
| /categories/:id | página os animes nessa categoria | mostrará os cards completos dos animes


##### Recursos da aplicação

1. Possui atalhos de teclado indicados
2, Alto constrate para melhorar a visualização
3. totalmente navegavel via teclado
4. consumido os dados de uma API.

##### Organização do projeto.

1. no diretório view possui os componentes de visualização com seus estilos.
2. no diretório services possui seus serviços para requisições http.
3. na raiz a estrutura principal do angular



```
├── app.component.html
├── app.component.scss
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
├── app-routing.module.ts
├── services
│   ├── category.service.spec.ts
│   ├── category.service.ts
│   ├── list.service.spec.ts
│   ├── list.service.ts
│   ├── search.service.spec.ts
│   └── search.service.ts
└── view
    ├── about
    │   ├── about.component.html
    │   ├── about.component.scss
    │   ├── about.component.spec.ts
    │   └── about.component.ts
    ├── anime
    │   ├── anime.component.html
    │   ├── anime.component.scss
    │   ├── anime.component.spec.ts
    │   └── anime.component.ts
    ├── category
    │   ├── category.component.html
    │   ├── category.component.scss
    │   ├── category.component.spec.ts
    │   └── category.component.ts
    ├── home
    │   ├── home.component.html
    │   ├── home.component.scss
    │   ├── home.component.spec.ts
    │   └── home.component.ts
    ├── list
    │   ├── list.component.html
    │   ├── list.component.scss
    │   ├── list.component.spec.ts
    │   └── list.component.ts
    └── search
        ├── search.component.html
        ├── search.component.scss
        ├── search.component.spec.ts
        └── search.component.ts
