$(window).ready(function () {
    const tabuleiro = new Tabuleiro(new Baralho(30));
    $('.Carta').click(function () {
        var id = $(this).attr('id');
        tabuleiro.execute(id);
    });
});
