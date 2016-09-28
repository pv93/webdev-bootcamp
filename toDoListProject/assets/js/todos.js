$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
})

$('ul').on('click', '.delete', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
})

$('input[type=\'text\']').keypress(function(e) {
	if (e.which === 13) {
		$('ul').append('<li><span class="delete"><i class="fa fa-trash"></i></span> ' + $(this).val() + '</li>')
		$(this).val(null); 
	}
})