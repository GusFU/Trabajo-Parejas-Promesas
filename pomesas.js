//https://dog.ceo/api/breeds/image/random
function buscar() {
    fetch('https://dog.ceo/dog-api/')
            .then(res=>res.json())
            .then(json=>console.log(json));
}