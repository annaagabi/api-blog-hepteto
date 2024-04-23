![header](https://64.media.tumblr.com/1a9cf88bbe5e83b47a789005b4be887f/e80ce0d688cbdee1-37/s2048x3072/6bf86f13f55fe9cbaf0017c5eea64ba0175d856d.pnj)

# API Blog

Uma API simples RESTful com CRUD que fornece dados JSON de título e texto de um post.
<br /><br />
:globe_with_meridians: Site de demonstração: https://consumo-api-blog.vercel.app/
<br />
:globe_with_meridians: Documentação: https://app.swaggerhub.com/apis-docs/HEPTETOOFICIAL/BLOG_HEPTETO/1.0#/

## Host de produção

[https://api-blog-hepteto.vercel.app](https://api-blog-hepteto.vercel.app)

## Tech Stack
![Stacks](https://skillicons.dev/icons?i=nodejs,react,mongodb,vercel&perline=4)

## API

### `POST /posts`

Cria uma nova postagem no blog com base nos dados fornecidos no corpo da solicitação:

> [https://api-blog-hepteto.vercel.app/posts](https://api-blog-hepteto.vercel.app/posts)
<br />
Exemplo de valor:

    {
        "title": "Título do Post",
        "body": "Texto corpo do post."
    }


### `GET /posts`

Retorna uma lista de todas as postagens no blog:

> [https://api-blog-hepteto.vercel.app/posts](https://api-blog-hepteto.vercel.app/posts)

    [
        {
            "_id":"6529541abdf3126d15dfd405",
            "title":"Problemas",
            "body":"Os problemas são oportunidades para se mostrar o que sabe",
            "__v":0
        },   
        {
            "_id":"6529542dbdf3126d15dfd407",
            "title":"Express",
            "body":" ",
            "__v":0
        }
    ]
    

### `GET /posts/{id}`

Retorna os detalhes de uma postagem específica com base no `id`:

> [https://api-blog-hepteto.vercel.app/posts/6529541abdf3126d15dfd405](https://api-blog-hepteto.vercel.app/posts/6529541abdf3126d15dfd405)

    [
        {
            "_id":"6529541abdf3126d15dfd405",
            "title":"Problemas",
            "body":"Os problemas são oportunidades para se mostrar o que sabe",
            "__v":0
        }
    ]

### `PATCH /posts/{id}`

Atualiza uma postagem existente com base no `id` com os dados fornecidos no corpo da solicitação:

> [https://api-blog-hepteto.vercel.app/posts/6529541abdf3126d15dfd405](https://api-blog-hepteto.vercel.app/posts/6529541abdf3126d15dfd405)
<br />
Exemplo de valor:

    {
        "title": "Título do Post a ser atualizado",
        "body": "Texto corpo do post a ser atualizado."
    }


### `DELETE /posts/{id}`

Exclui uma postagem existente com base no `id`:

> [https://api-blog-hepteto.vercel.app/posts/6529541abdf3126d15dfd405](https://api-blog-hepteto.vercel.app/posts/6529541abdf3126d15dfd405)

    {
        "message: "Post removido com sucesso",
    }

## Autores

- [@annaagabi](https://www.github.com/annaagabi)
- [@doyklas](https://github.com/doyklas​)
- [@GeoGustin](https://www.github.com/GeoGustin)
- [@GabrielaLimadaLuz](https://github.com/GabrielaLimadaLuz​)
- [@Hepteto](https://github.com/hepteto​)