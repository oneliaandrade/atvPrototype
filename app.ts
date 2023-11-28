import { Veiculo } from "./veiculo";
import { Moto } from "./moto";
import { Onibus } from "./onibus";

let listaVeiculos = new Array<Veiculo>;

let onibusModelo = new Onibus("Mercedez", "Borborema", "Branco", 12, 3, 60);
let motoModelo = new Moto("CG", "Honda", 2, "Preta", 160)

let cloneMoto1 = motoModelo.clone("Factor", "Yamaha", 2, "Preta", 150);
listaVeiculos.push(cloneMoto1);

let cloneMoto2 = motoModelo.clone("EV1", "Voltz", 2, "Vermelha", 80);
listaVeiculos.push(cloneMoto2);

let cloneOnibus1 = onibusModelo.clone("Mercedez", "Vera Cruz", 12, "Azul", 3, 55);
listaVeiculos.push(cloneOnibus1);

let cloneOnibus2 = onibusModelo.clone("Mercedez", "Transcol", 12, "Verde", 3, 45);
listaVeiculos.push(cloneOnibus2);

console.table(listaVeiculos);

listaVeiculos.forEach(element => {
    console.log(element.toString());
});