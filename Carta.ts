class Carta{
    private _valor : number;
    private _virado : Boolean;
    private _posicao : PosicaoNoTabuleiro;

    constructor(valor : number){
        this._valor = valor;
        this._virado = false;
    }

    //SET
    public set_Posicao(posX : number, posY : number) : void {
        this._posicao = new PosicaoNoTabuleiro(posX,posY);
    }
    public set_Virado(v : Boolean) : void {
        this._virado = v;
    }


    //GET
    public get_Valor() : number {
        return this._valor;
    }
    public get_Virado() : Boolean {
        return this._virado;
    }
    public get_pos_X() : number {
        return this._posicao.get_pos_X();
    }
    public get_pos_Y() : number {
        return this._posicao.get_pos_Y();
    }
}
