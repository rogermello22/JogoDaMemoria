class PosicaoNoTabuleiro {
    constructor(posX, posY) {
        this._posicao = [];
        this._posicao[0] = posX;
        this._posicao[1] = posY;
    }
    set_Pos_X(num) {
        this._posicao[0] = num;
    }
    set_Pos_Y(num) {
        this._posicao[1] = num;
    }
    get_pos_X() {
        return this._posicao[0];
    }
    get_pos_Y() {
        return this._posicao[1];
    }
}
