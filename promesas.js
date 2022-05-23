var perro = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var cont1 = 1;
var perros
var labels = [];
function buscar() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((json) => sacar(json));
}
function sacar(json) {
    let urlPerro = json.message;
    document.getElementById("foto").src = urlPerro;
    var arrayDePerros = [];
    var dataLocalStorage = JSON.parse(localStorage.getItem("perros"));
    let razas = json.message.split("/")[4];
    //se comprueba si localstorage tiene datos
    if (dataLocalStorage) {
        //como tiene datos pusheamos en el array un nuevo perro que viene del flech
        arrayDePerros.push({ razas, img: urlPerro });
        //despues recorro todos los perros de localstorage y los meto uno a uno
        //en el array push
        for (let index = 0; index < dataLocalStorage.length; index++) {
            const element = dataLocalStorage[index];
            arrayDePerros.push(element);
        }
        //a continuacion guardamos en el localstorage todos los perros incluido el nuevo peroo del flech
        localStorage.setItem("perros", JSON.stringify(arrayDePerros));
    } else {
        //al no existir perro en localstorage meto solo 1
        localStorage.setItem("perros", JSON.stringify([{ razas, img: urlPerro }]));
    }
    //si es la primera vez no comprobamos que exista y lo metemos a la cuadricula directamente 
    if (cont1 == 1) {
        document.getElementById("foto" + cont1).src = urlPerro
    }
    //comprobamos que la imagen de perros sea distinta de urlperro
    // para que en la cuadricula de fotos no se repitan razas
    for (let index = 0; index < arrayDePerros.length; index++) {
        perros = arrayDePerros[index];
        if ((urlPerro != perros.img) && cont1 <= 20) {

            document.getElementById("foto" + cont1).src = urlPerro
        }
    }
    // hacemos una funcion que sirve para que la grafica se borre y 
    // se cree cada vez que se da al boton ramdon 
    const ejercicio1 = function () {
        // para que la grafica sea dinamica la borramos y la creamos de
        // nuevo cada vez que le damos al boton ramdon
        if (document.querySelector(".grafica")) {
            var divs = document.querySelector(".grafica");
            var div = divs;
            var padre = div.parentNode;
            padre.removeChild(div);
            ejercicio1()
        } else {
            grafi = document.createElement("div");
            grafi.setAttribute("class", "grafica");
            can = document.createElement("canvas");
            can.setAttribute("id", "myChart");
            grafi.appendChild(can);
            document.body.appendChild(grafi);
            //aqui metemos la raza a la grafica siendo maximo 20 razas
            if (cont1 <= 20) {
                if (cont1 == 1) {
                    labels.push(`${json.message.split("/")[4]}`)
                } else {
                    labels.push(arrayDePerros[0].razas)
                }
            }
            //aqui sumamos las veces que sale cada raza de las que estan en la cuadricula
            //usamos lengh -j porque el primer perro es la ultima posicion de la array
            for (let j = 1; j < arrayDePerros.length; j++) {
                if (arrayDePerros[0].razas == arrayDePerros[arrayDePerros.length - j].razas) {
                    if (j <= 20) {
                        perro[j - 1] += 1
                    }
                }
            }
            //a partir de aqui comienza la grafica
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Nº x raza',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [perro[0], perro[1], perro[2], perro[3],
                    perro[4], perro[5], perro[6], perro[7], perro[8],
                    perro[9], perro[10], perro[11], perro[12],
                    perro[13], perro[14], perro[15], perro[16],
                    perro[17], perro[18], perro[19]],
                }]
            }
            const config = {
                type: 'bar',
                data: data,
                options: {}
            };
            const myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
        }
    }
    ejercicio1()
    cont1++
}
