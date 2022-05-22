
var perro = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var cont1 = 1;
var cont2 = 0
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



    //SE COMPRUEBA SI LOCALSTORAGE TIENE DATOS
    if (dataLocalStorage) {
        //COMO TIENE DATOS PUSHEO EN EL ARRAY PUSH UN NUEVO PERRO QUE ME VIENE DEL FETCH
        arrayDePerros.push({ razas, img: urlPerro });
        //DESPUES RECORRO TODOS LOS PERROS DE LOCALTORAGE Y LOS METO UNO A UNO EN EL ARRAY PUSH
        for (let index = 0; index < dataLocalStorage.length; index++) {
            const element = dataLocalStorage[index];
            arrayDePerros.push(element);
        }
        //A CONTINUACION GUARDO EN EL LOCALSTORAGE TODOS LOS PERROS TANTO LOS QUE HABIA COMO EL NUEVO PERRO DEL FETCH
        localStorage.setItem("perros", JSON.stringify(arrayDePerros));
    } else {
        // AL NO EXISTIR PERRO EN LOCALSTORAGE METO SOLO 1, ES DECIR EL PRIMERO
        localStorage.setItem("perros", JSON.stringify([{ razas, img: urlPerro }]));
    }

    //AHORA SE RECORRE EL ARRAYDEPERROS Y SACARA TODOS LOS PERROS QUE HAY EN LOCALSTORAGE PARA PODER
    //MANIPULAR LOS DATOS
    if (cont1 == 1) {
        document.getElementById("foto" + cont1).src = urlPerro
    }
    for (let index = 0; index < arrayDePerros.length; index++) {
        perros = arrayDePerros[index];
        if ((urlPerro != perros.img) && cont1 <= 20) {

            document.getElementById("foto" + cont1).src = urlPerro
        }
    }


    //hacemos una funcion que sirve para que la grafica se borre y 
    //se cree cada vez que se da al boton ramdon 
    const ejercicio1 = function () {

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
            if (cont1 <= 20) {
                if (cont1 == 1) {
                    labels.push(`${json.message.split("/")[4]}`)

                } else {

                    labels.push(arrayDePerros[0].razas)

                }
            }



   for (let j = 1; j < arrayDePerros.length; j++) {
                if (arrayDePerros[0].razas == arrayDePerros[arrayDePerros.length - j].razas) {
                    if (j <= 20) {
                        perro[j-1] += 1
                    }
                }
            }

            const data = {
                labels: labels,
                datasets: [{
                    label: 'Perret',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [perro[0], perro[1], perro[2], perro[3], perro[4], perro[5], perro[6], perro[7], perro[8], perro[9], perro[10], perro[11], perro[12], perro[13], perro[14], perro[15], perro[16], perro[17], perro[18], perro[19]],
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
