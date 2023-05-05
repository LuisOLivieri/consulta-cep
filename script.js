$(document).ready(function(){
    $('#cep').blur(function(){
        var valor = $(this).val();

        $.ajax ({
            url: "https://viacep.com.br/ws/"+valor+"/json/",
            type: "GET",
            success: function(dados, status){
                $("#localidade").val(dados.localidade);
                $("#logradouro").val(dados.logradouro);
                $("#ibge").val(dados.ibge);
                $("#ddd").val(dados.ddd);
                $("#siafi").val(dados.siafi);
            },
            error: function() {
                alert('CEP INVÁLIDO!!!!')
            }
        })
    });
});