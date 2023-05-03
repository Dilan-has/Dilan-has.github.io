function enviarFormulario(event) {
    event

    event.preventDefault();

}

function ganancia() {

    auto = document.getElementById("dspl").value

    distancia = document.getElementById("distancia").value

    precio = document.getElementById("precio").value

    resultado = document.getElementById("resultado")

    preciogalon = 11200
    if (auto == 1) {

        autonomia = 50

        consumo = distancia / autonomia

        consumototal = preciogalon * consumo

        ganancia = precio - consumototal

        resultado.value = ganancia


    } else {

        alert("seleccione spark")

        resultado.value = ("rellene los campos")

    }



}



