const express = require('express');
const posts = require("../model/post")
const routes = express.Router();
// const cors = require("cors");

// const options = {
//     origin: "http://localhost:3000"
// }

// routes.use(cors(options))

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
