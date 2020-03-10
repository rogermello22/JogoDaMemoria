class Tabuleiro {
    private _tabuleiro : Carta[][] = [];
    private _baralho : Baralho;
    private _regras : Regras;

    constructor(baralho : Baralho) {
        var coluna = 0;
        var linha = 0;
        this._tabuleiro[0] = [];
        this._baralho = baralho;

        for(var i=0 ; i<baralho.get_Tamanho() ; i++){
            if(linha == 6){
                coluna++;
                linha = 0;
                this._tabuleiro[coluna] = [];
            }

            this._tabuleiro[coluna][linha] = this._baralho.get_Carta(i);
            this._tabuleiro[coluna][linha].set_Posicao(linha,coluna);
            linha++;
        }

        this._regras = new Regras();

        this.imprimir_tabuleiro();
    }

    public execute(id : String){
        var posY = +id[6];
        var posX = +id[8];

        this._regras.executar_regra(this._tabuleiro[posY][posX]);
    }

    private imprimir_tabuleiro() : void {
        var tam = this._baralho.get_Tamanho();
        var pos = 0;
        var maxLinha = 6;
        var maxColuna = tam/6;

        var coluna = 0;
        var linha = 0;

        for(var i=0 ; i<tam ; i++){
            if(linha == 6){
                coluna++;
                linha = 0;
            }

            var posX = this._tabuleiro[coluna][linha].get_pos_X();
            var posY = this._tabuleiro[coluna][linha].get_pos_Y();

            var id = "Carta-"+posY+"-"+posX;

            var val = this._tabuleiro[coluna][linha].get_Valor();

            var html = $(".tabuleiro_container ul").html();

            html += `<li>
                        <div id="`+id+`" class="flip-container Carta">
                            <div class="flipper">
                                <div class="front">
                                    <img src="fundo.jpg" alt="">
                                </div>
                                <div class="back">
                                    <img src="img`+val+`.png">
                                </div>
                            </div>
                        </div>
                    </li>`;

            $(".tabuleiro_container ul").html(html);
            linha++;
        }
    }


}
