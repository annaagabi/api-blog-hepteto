//const router = require('express').Router()
//const Posts = require('../models/posts')
const express = require('express')
const router = express.Router()
const Posts = require('../models/posts')

const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())


// Rotas da API

// Create - criação de dados

router.post('/', async (req, res) => {
    const{ title, body} = req.body
    // const{ title, body, comments, date } = req.body

    if(!title){
        res.status(422).json({error: 'O titulo é obrigatório!'})
        return
    }

    const postsData = {
        title, 
        body
        // comments, 
        // date
    }

// Cria dados no sistema

    try{
        // criando dados
        await Posts.create(postsData)

        // recurso criado com sucesso
        res.status(201).json({message: 'Post inserido no sistema com sucesso'})
    } catch(error){
        res.status(500).json({error: error})
    }

})

// Read - Leitura de dados
router.get('/', async(req, res) =>{
    try{
        const posts = await Posts.find()

         // status 200: a requisição foi realizada com sucesso
         res.status(200).json(posts)
    } catch(error){
        res.status(500).json({error: error})
    }
})

// Rotas dinâmicas
router.get('/:id' , async(req, res) =>{

    // Extrai o dado da requisição pela url = req.params
    const id = req.params.id

    try{
        const posts = await Posts.findOne({_id: id})

        if(!posts){
            res.status(422).json({message: 'Post não encontrado'})
            return
        }

        res.status(200).json(posts)

    } catch(error){
        res.status(500).json({error: error})
    }
})

// Updadte - atualização de dados (PUT, PATCH)
// PUT - espera que mandemos um objeto completo para realizar a atualização de registro do sistema
// PATCH - Atualização parcial

router.patch('/:id', async(req, res) =>{
    //a url vai vir com o id do usuario
    const id = req.params.id

    // o corpo vai vir com os dados que precisam ser atualizados
    const{ title, body } = req.body
   // const{ title, body, comments, date } = req.body

    const postsData = {
        title, 
        body
        // comments, 
        // date
    }

    try{
        const updatedPosts = await Posts.updateOne({_id: id}, postsData)

         // Se não atualizou nada
        if(updatedPosts.matchedCount === 0 ) { // validação de existencia de post
            res.status(422).json({message: 'O post não foi encontrado'})
            return 
        }

        res.status(200).json(postsData)

    }catch(error){
        res.status(500).json({error: error})
    }
})

// Delete - deletar dados

router.delete('/:id', async (req, res) =>{
    const id = req.params.id

    const posts = await Posts.findOne({_id: id})

    if(!posts){
        res.status(422).json({ message: 'O post não foi encontrado' })
        return // não executa mais nenhuma linha
    }

    try{
        await Posts.deleteOne({_id: id})
        res.status(200).json({ message:'Post removido com sucesso'})

    } catch(error){
        res.status(500).json({error: error})
    }
})


module.exports = router