class Baralho {
    private _cartas : Carta[] = [];
    private _tamanho : number;

    constructor(tamanho : number) {
        var valor = +0;

        for(var i = +0 ; i<tamanho ; i=i+2){
            this._cartas[i] = new Carta(valor);
            this._cartas[i+1] = new Carta(valor);

            valor++;
        }

        this._tamanho = tamanho;

        this.embaralhar(this._cartas);
    }

    //GET
    public get_Carta(pos : number) : Carta {
        return this._cartas[pos];
    }
    public get_Tamanho() : number {
        return this._tamanho;
    }

    private embaralhar(array : Carta[]) : void {
        var currentIndex = array.length;
        var temporaryValue;
        var ramdomIndex;

        while (0 !== currentIndex){

            ramdomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[ramdomIndex];
            array[ramdomIndex] = temporaryValue;
        }

        this._cartas = array;
    }
}