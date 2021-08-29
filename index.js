const PORT = 3000;
const express = require('express');
const apiRoute = require('./Routes/api');
const { generetaID } = require('./model/post');
const path = require("path");
const app = express();

app.use('/api', apiRoute);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=> console.log("Server runnding in", PORT));
    
//falando a base númerica.
//substring(), diz que queremos a string depois do segundo caracter e queros os próximos
//nove caracteres, eles são representados pelos primeiro e segundo argumentos
//respectivamente 
