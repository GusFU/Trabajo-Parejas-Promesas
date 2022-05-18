//https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_9293.jpg
var cont = 0
var cont1 = 0
function buscar() {




    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => sacar(json))

}

function sacar(json) {
    var a = json.message
    localStorage.setItem(`perro${cont}`, json.message)
    var mostrar = localStorage.getItem([0])

    document.getElementById("foto").src = a
    console.log(mostrar)
    cont++
    cont1++
}




/*function buscar() {
    let parrafo=document.createElement("p");
    // let texto=document.createTextNode();
    let nombre = document.getElementById("nombre").value;
    let nombre1 = "";
    let avatar1 = "";
    let repos1 = "";
    fetch(`https://api.github.com/users/${nombre}`)
        .then(res => res.json())
        .then(json =>  {let a = json.name
            let b = json.avatar_url
            let c = json.public_repos
            var texto1 = document.createTextNode("Nombre: "+a+" Avatar: "+b+" Repo: "+c);
            
            parrafo.appendChild(texto1)
            document.body.appendChild(parrafo)

        }
      
            )
       
    }*/