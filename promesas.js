//https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_9293.jpg

/*function repe(raza1,raza2){
    for(i=0;i<localStorage.length;i++){
        if(raza1==raza2[i]){
            return true 
        }else{
            return false
        }
    }

    
}*/

var cont = 0
function buscar() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => sacar(json))
}
function sacar(json) {
    var a = json.message
    localStorage.setItem(`perro${cont}`, json.message)
    let key;
    //var mostrar = localStorage.getItem()
    // https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190811_105232.jpg
    var razas = json.message.split("/")[4]
    console.log(localStorage)
    // for (let i = 0; i < localStorage.length-1; i++) {
    //   key = localStorage.key(i);
    //     var razasl = localStorage.getItem(key).split("/")[4]
    //     console.log(i)
    // }
   
    // document.getElementById("foto").src = a
    // cont++
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
