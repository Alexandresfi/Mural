const express = require('express');
const posts = require("../model/post")
const routes = express.Router();

routes.get('/all', (req , res)=>{
    res.json(JSON.stringify(posts.getAll()));
})

routes.post('/new', express.json(), (req,res)=>{
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado com sucesso.");
})


routes.delete('/deleta', express.json(), (req, res)=>{

    let deletaItem = req.body.id;
    posts.deletePost(deletaItem);

    res.send("Post deletado com sucesso!")
})

module.exports = routes;