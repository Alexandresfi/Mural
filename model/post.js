module.exports ={
    posts: [
        {
            id: "dasdsadsa",
            title: "testando o mural",
            description: "Descrevendo o post"
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