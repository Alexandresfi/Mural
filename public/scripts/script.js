
//chamando a update quando todos os elementos do página forem carregados
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts(); 
})


function updatePosts() {
    
    fetch("http://192.168.0.106:3000/api/all").then(res=>{
        return res.json();
    }).then(json=>{  
        let postElements = " ";
        let posts = JSON.parse(json);
        
        posts.forEach(post => {
            let postElement = `
                                <div id=${post.id} class="card mb-4">
                                        <div class="card-header">
                                            <h5 class="d-flex justify-content-between">
                                            ${post.title}
                                            <img src="./assescs/lixeira.png" alt="apagar" id=${post.id} onclick="deletePost(this)">
                                            </h5>
                                        </div>

                                        <div class="card-body">

                                            <div class="card-text"> ${post.description} </div>

                                        </div>
                                </div>`;
            postElements += postElement;
        });
        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let post = {title, description};
    const options = {
        method:"POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.0.106:3000/api/new", options).then(res=>{
        console.log(res)
        updatePosts();
        document.getElementById("title").value= " ";
        document.getElementById("description").value= " ";
    })
}

function deletePost(event) {
    console.log(event.id)

    let id = {id: event.id}
   console.log(id)
    const options = {
        method: "DELETE",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(id)
    }

    fetch("http://192.168.0.106:3000/api/deleta", options).then(res=>{
        updatePosts();
    })
}

//Pensamento do que o script precisa fazer:
//1º Ele precisa fazer a chamada(conectar) com o banck-end, para assim fazer a 
//chamadas de todos os posts, e coloca-los na tela.

//2º Ele precisa adicionar todos um post e logo após isso renderizar todos os posts
//