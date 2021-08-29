module.exports ={
    posts: [
        {
            id: "dasdsadsa",
            title: "Olá",
            description: "Sejam bem-vindos(as), eu sou Alexandre Nascimento e você está no meu primeiro projeto em Node.Js visite meu Linkedin <a href='https://www.linkedin.com/in/alexandre-nascimento-66692920a/'>Click aqui</a>"
        }
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: this.generetaID(), title, description});
    },

    generetaID(){
        return id = Math.random().toString(36).substring(2);
    },

    deletePost(id){
        this.posts = this.posts.filter( item =>item.id != id)
    }
}
//falando a base númerica.
//substring(), diz que queremos a string depois do segundo caracter e queros os próximos
//nove caracteres, eles são representados pelos primeiro e segundo argumentos
//respectivamente 