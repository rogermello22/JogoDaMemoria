class Baralho {
    constructor(tamanho) {
        this._cartas = [];
        var valor = +0;
        for (var i = +0; i < tamanho; i = i + 2) {
            this._cartas[i] = new Carta(valor);
            this._cartas[i + 1] = new Carta(valor);
            valor++;
        }
        this._tamanho = tamanho;
        this.embaralhar(this._cartas);
    }
    get_Carta(pos) {
        return this._cartas[pos];
    }
    get_Tamanho() {
        return this._tamanho;
    }
    embaralhar(array) {
        var currentIndex = array.length;
        var temporaryValue;
        var ramdomIndex;
        while (0 !== currentIndex) {
            ramdomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[ramdomIndex];
            array[ramdomIndex] = temporaryValue;
        }
        this._cartas = array;
    }
}
