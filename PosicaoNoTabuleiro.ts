class PosicaoNoTabuleiro {
    private _posicao: number[] = [];

    constructor(posX : number, posY : number){
        this._posicao[0] = posX;
        this._posicao[1] = posY;
    }

    //SET
    public set_Pos_X(num : number) : void {
        this._posicao[0] = num;
    }
    public set_Pos_Y(num : number) : void {
        this._posicao[1] = num;
    }

    //GET
    public get_pos_X() : number {
        return this._posicao[0];
    }
    public get_pos_Y() : number {
        return this._posicao[1];
    }
}