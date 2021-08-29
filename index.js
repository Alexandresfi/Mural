const PORT = 3000;
const express = require('express');
const { generetaID } = require('./model/post');
const posts = require("./model/post")
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")))

app.get('/all', (req , res)=>{
    res.json(JSON.stringify(posts.getAll()));
})


app.post('/new', express.json(), (req,res)=>{
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado com sucesso.");
})


app.delete('/deleta', express.json(), (req, res)=>{

    let deletaItem = req.body.id;
    posts.deletePost(deletaItem);

    res.send("Post deletado com sucesso!")
})




app.listen(PORT, ()=> console.log("Server runnding in", PORT));
    
//falando a base númerica.
//substring(), diz que queremos a string depois do segundo caracter e queros os próximos
//nove caracteres, eles são representados pelos primeiro e segundo argumentos
//respectivamente 
