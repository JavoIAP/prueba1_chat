function Chat(comment){
	this.comment = comment;
}

Chat.enviar = function(e){
	e.preventDefault();
	var comment2 = document.getElementById('comment').value;
	//var chat = new Chat(comment);

	document.getElementById('comment').innerHTML = comment2;

}

Chat.mostrar = function(){
	var comment = '';
	Twit.twits.map(function(elemento,indice){			//map para iterar el arreglo, ejecutando la funcion anonima la cantidad de veces q depende del largo del arreglo
		comment += '<article>';
		comment += '<h2>' +elemento.titulo+ '</h2>';
		comment += '<p>' + elemento.desc + '</p>';
		comment += '</article>';
	});         

	document.getElementById('comentarios').innerHTML = comentario;


}