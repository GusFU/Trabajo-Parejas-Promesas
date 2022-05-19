var cont = 0
var cont1 = 1
function buscar() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => sacar(json))
}
function sacar(json) {
    let a = json.message
    let key;
    var razasl
    var razas = json.message.split("/")[4]
    document.getElementById("foto").src = a
    if (localStorage.length == 0) {
        document.getElementById("foto" + cont1).src = a
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            razasl = localStorage.getItem(key).split("/")[4]
            if (razas != razasl) {
                if(cont<20){
                document.getElementById("foto" + cont1).src = a
                }
            }else{console.log(razas)}
        }
    }
    cont1++
    localStorage.setItem(`perro${cont}`, a)
    cont++
}




