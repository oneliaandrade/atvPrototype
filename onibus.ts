import { Veiculo } from "./veiculo";

export class Onibus extends Veiculo{
    private numPortas;
    private numpassageiros;

    constructor(modelo: string, marca: string, cor: string, numRodas: number, numPortas : number, numpassageiros : number) {
        super();
        this.numPortas = numPortas;
        this.numpassageiros = numPortas;
    }

    public clone (modelo : string, marca : string, numRodas: number, cor : string, numPortas?: number, numpassageiros?: number) : Veiculo {
        let onibus = Object.create(this);
        onibus.modelo = modelo;
        onibus.marca = marca;
        onibus.numeroRodas = numRodas;
        onibus.cor = cor;
        onibus.numPortas = numPortas;
        onibus.numpassageiros = this.numpassageiros;
        return onibus;
    } 

    toString() : string{
        return super.toString() + " - " + this.numPortas + " portar - " + this.numpassageiros + "passageiros.";
    }
}