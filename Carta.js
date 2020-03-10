class Carta {
    constructor(valor) {
        this._valor = valor;
        this._virado = false;
    }
    set_Posicao(posX, posY) {
        this._posicao = new PosicaoNoTabuleiro(posX, posY);
    }
    set_Virado(v) {
        this._virado = v;
    }
    get_Valor() {
        return this._valor;
    }
    get_Virado() {
        return this._virado;
    }
    get_pos_X() {
        return this._posicao.get_pos_X();
    }
    get_pos_Y() {
        return this._posicao.get_pos_Y();
    }
}
