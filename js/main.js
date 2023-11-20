
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    })

  $('.menu-hamburguer').click(function(){
    $('nav').slideToggle()
  }) 

  $('#telefone').mask('(00) 00000-0000', {placeholder: "(00) 00000-0000"} )

  $('form').validate({
    rules:{
        nome:{
            required:true,
        },
        email:{
            required:true,
            email:true,
        },
        telefone:{
            required:true,
        },
        mensagem:{
            required:true,
        },
        veiculoDeInteresse:{
            required:false
        }
    },messages:{
        nome:'Por favor, insira o seu nome'
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(event,validador){
        let camposIncorretos = validador.numberOfInvalids();

        if(camposIncorretos){
            alert(`Existem ${camposIncorretos} incorretos`)
        }
    }
    
  })
  $('.lista-veiculos button').click(function(){
    const destino = $('#contato')

    const nomeVeiculo = $(this).parent().find('h3').text()

    $('#veiculoDeInterrese').val(nomeVeiculo)

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)

  })
})

