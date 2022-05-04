const carros = [
    {
        "pictures": [
            "../assets/car2.png"
        ],
        "name": "VOLVO XC90",
        "year": 2022,
        "seats": 7,
        "fuel": "Híbrido",
        "category": "SUV"
        }
]
const carName = document.getElementById("featuredCarTitle");
const carYear = document.getElementById("infoAno");
const numLugares = document.getElementById("infoLugares");
const carFuel = document.getElementById("infoGasolina");
const carCategory = document.getElementById("infoCategoria");

numLugares.innerHTML = `${carros[0].seats} lugares`;

carName.innerHTML = carros[0].name;
carYear.innerHTML = carros[0].year;
carFuel.innerHTML = carros[0].fuel;
carCategory.innerHTML = carros[0].category;



    




