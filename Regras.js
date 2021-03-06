class Regras {
    constructor() {
        this._emJogada = false;
        this._pontos = 0;
        this._jogadas = 0;
    }
    executar_regra(carta) {
        if (this._cartaDaJogada != carta) {
            if (this._emJogada == false) {
                this._emJogada = true;
                this._cartaDaJogada = carta;
                var x = carta.get_pos_X();
                var y = carta.get_pos_Y();
                this.virarCarta(y, x, 0);
            }
            else {
                if (this.compararCarta(this._cartaDaJogada, carta)) {
                    var idCarta1 = "#Carta-" + this._cartaDaJogada.get_pos_Y() + "-" + this._cartaDaJogada.get_pos_X();
                    var idCarta2 = "#Carta-" + carta.get_pos_Y() + "-" + carta.get_pos_X();
                    var x = carta.get_pos_X();
                    var y = carta.get_pos_Y();
                    this.virarCarta(y, x, 0);
                    $(idCarta1).fadeOut(1000);
                    $(idCarta2).fadeOut(1000);
                    this._jogadas++;
                    $('.jogadas').text("Jogadas: " + this._jogadas);
                    this._pontos++;
                    $('.pontos').text("Pontos: " + this._pontos);
                }
                else {
                    this._jogadas++;
                    $('.jogadas').text("Jogadas: " + this._jogadas);
                    var x1 = carta.get_pos_X();
                    var y1 = carta.get_pos_Y();
                    var x2 = this._cartaDaJogada.get_pos_X();
                    var y2 = this._cartaDaJogada.get_pos_Y();
                    this.virarCarta(y1, x1, 0);
                    this.virarCarta(y1, x1, 1000);
                    this.virarCarta(y2, x2, 1000);
                }
                this._emJogada = false;
            }
        }
    }
    compararCarta(carta1, carta2) {
        if (carta1.get_Valor() == carta2.get_Valor()) {
            return true;
        }
        else {
            return false;
        }
    }
    virarCarta(y, x, time) {
        var id = "#Carta-" + y + "-" + x;
        setTimeout(function () {
            document.querySelector(id).classList.toggle("flip");
        }, time);
    }
}
