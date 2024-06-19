$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        if(!$('form input').val()) {
            alert("Não é possível cadastrar uma tarefa vazia !");
        } 
        else {
            const novoItem = $(`<li>${$('form input').val()}</li>`);
            $(novoItem).appendTo('ul');
        }

        $('form input').val('');
    });

    $('ul').on('click', 'li', function(e) {
        $(this).toggleClass('riscado');
    });
});