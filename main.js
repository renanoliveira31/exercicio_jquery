$(document).ready(function() {
  $('#slide').click(function(){
    $('form').slideToggle();
  })

$('form').on('submit', function(e) {
  e.preventDefault();
  const adicionarConteudo = $('#compromisso').val(); 
  const novoItemLista = $('<li></li>').text(adicionarConteudo);
  $('ul').append(novoItemLista);
  $('#compromisso').val('');
});

$('ul').on('click', 'li', function() {
  $(this).toggleClass('concluido');
  if ($(this).hasClass('concluido')) {
      $(this).css('text-decoration', 'line-through');
      $(this).css('font-weight', 'bold');
  } else {
      $(this).css('text-decoration', 'none');
      $(this).css('font-weight', 'normal');
  }
});
})

