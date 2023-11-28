export abstract class Veiculo{
    private modelo;
    private marca;
    private cor;
    private numRodas;

    constructot(modelo : string, marca : string, cor : string, numRodas : number){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numRodas = numRodas;

    }

    public toString() : string{
        return this.modelo + " - " + this.marca + " - " + this.numRodas + " - " + this.cor;

    }
}

