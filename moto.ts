import { Veiculo } from "./veiculo";

export class Moto extends Veiculo{
    private cilindrada : number;

    constructor(modelo : string, marca : string, numRodas: number, cor : string, cilindrada : number){
        super();
        this.cilindrada = cilindrada;
    }

    public clone(modelo : string, marca : string, numRodas: number, cor : string, cilindrada ?: number) : Veiculo{
        let dolly = Object.create(this);
        dolly.modelo = modelo;
        dolly.marca = marca;
        dolly.numeroRodas = numRodas;
        dolly.cor = cor;
        dolly.cilindrada = cilindrada;
        return dolly;
    }

    public override toString() : string{
        return super.toString() + " - " + this.cilindrada;
    }


}