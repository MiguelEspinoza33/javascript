// coach de pitcheo 

let pitcher1 = {
    nombre: "",
    energia: 0,
    efectividadZurdos: 0,
    efectividadDerechos: 0,
};

let pitcher2 = {
    nombre: "",
    energia: 0,
    efectividadZurdos: 0,
    efectividadDerechos: 0,
};

let bateador1 = {
    direccion: "",
    average: 0,
};

let bateador2 = {
    direccion: "",
    average: 0,
};

let bateador3 = {
    direccion: "",
    average: 0,
};

const bateadores = [bateador1, bateador2, bateador3];

function pedirDatos(texto) {
    let num = Number(prompt(texto));
    while (isNaN(num)) {
        alert("Dato mal ingresado. Por favor, ingrese un número válido.");
        num = Number(prompt(texto));
    }
    return num;
}

pitcher1.nombre = prompt("Ingrese nombre de su pitcher 1");
pitcher1.energia = pedirDatos("Ingrese la energía de " + pitcher1.nombre);
if (pitcher1.energia < 80) {
    alert("Intenta con otro pitcher porque vas a perder");
} else {
    pitcher1.efectividadZurdos = pedirDatos("Ingrese la efectividad contra zurdos de " + pitcher1.nombre);
    pitcher1.efectividadDerechos = pedirDatos("Ingrese la efectividad contra derechos de " + pitcher1.nombre);
}

pitcher2.nombre = prompt("Ingrese nombre de su pitcher 2");
pitcher2.energia = pedirDatos("Ingrese la energía de " + pitcher2.nombre);
if (pitcher2.energia < 80) {
    alert("Intenta con otro pitcher porque vas a perder");
} else {
    pitcher2.efectividadZurdos = pedirDatos("Ingrese la efectividad contra zurdos de " + pitcher2.nombre);
    pitcher2.efectividadDerechos = pedirDatos("Ingrese la efectividad contra derechos de " + pitcher2.nombre);
}

bateador1.direccion = prompt("Ingrese mano hábil del bateador 1 (zurdo o derecho)").toLowerCase();
bateador2.direccion = prompt("Ingrese mano hábil del bateador 2 (zurdo o derecho)").toLowerCase();
bateador3.direccion = prompt("Ingrese mano hábil del bateador 3 (zurdo o derecho)").toLowerCase();

function probabilidadExito(pitcher, bateadores) {
    let probabilidadTotal = 0;
    let contador = 0;
    bateadores.forEach(bateador => {
        let direccionBateador = bateador.direccion;
        if (direccionBateador.includes('zurdo')) {
            probabilidadTotal += pitcher.efectividadZurdos;
        } else {
            probabilidadTotal += pitcher.efectividadDerechos;
        }
        contador++;
    });
    return probabilidadTotal / contador;
}

let probabilidadPitcher1 = probabilidadExito(pitcher1, bateadores);
let probabilidadPitcher2 = probabilidadExito(pitcher2, bateadores);

if (probabilidadPitcher1 > probabilidadPitcher2) {
    alert("El pitcher " + pitcher1.nombre + " tiene mejores probabilidades de cerrar el noveno inning");
} else if (probabilidadPitcher2 > probabilidadPitcher1) {
    alert("El pitcher " + pitcher2.nombre + " tiene mejores probabilidades de cerrar el noveno inning");
} else {
    alert("Ambos pitchers tienen las mismas probabilidades de éxito.");
}
