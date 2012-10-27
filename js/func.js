// JavaScript Document
$(document).ready(function(e) {
/*	$('.btn').tap(function(){
		var boton = (($(this).attr('class')).split(' '))[1];
		switch(boton){
			case 'b1':
				alert('beep 1');
					break;
			case 'b2':
				alert('beep 2');
					break;
			case 'b3':
				alert('beep 5');
					break;
			case 'v1':
				alert('vibrar');
					break;
			case 'v2':
				alert('vibrar');
				alert('vibrar');
					break;
				
		}
	});
	$('#right').swiperight(function(){
			alert('se mueve a la derecha');
	});
	$('#left').swipeleft(function(){
			confirm('que desea hacer?');
	});
*/
	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton = (($(this).attr('class')).split(' '))[1];
			switch(boton){
				case 'b1':
					navigator.notification.beep(1);
					break;
				case 'b2':
					navigator.notification.beep(2);
					break;
				case 'b3':
					navigator.notification.beep(5);
					break;
				case 'v1':
					navigator.notification.vibrate(500);
					break;
				case 'v2':
					navigator.notification.vibrate(300);
					navigator.notification.vibrate(1000);
					break;
			}
		});
		$('#right').swiperight(function(){
			showAlert();
			});
			$('#left').swipeleft(function(){
				navigator.notification.confirm('¿Qué desea hacer?',function(boton){
				switch(boton){
					case 1:
						navigator.notification.beep(1);
						break;
					case 2:
					navigator.notification.vibrate(500);
					break;
				}
			},"Práctica 1","Beep,Vibrar,Cancelar");
		});

function deviceinfo(){
	$('#device table td').eq(1).text(device.name);
	$('#device table td').eq(3).text(device.phonegap);
	$('#device table td').eq(5).text(device.plataform);
	$('#device table td').eq(7).text(device.version);
	$('#device table td').eq(9).text(device.uuid);
}
$(document).ready(function(){
	deviceinfo();
	document.addEventListener("deviceready",function(){
	deviceinfo()
	},false);
});
// sonido de pc
//	navigator.notification.beep(1);

//vibracion
//	navigator.notification.vbrate(300);


//	navigator.notification.alert("mensaje",funcion de callback,"titulo","nombre del boton");
//	navigator.notification.confirm("mensaje",funcion de botones(parametros que regresa el boton pulsado)´switch de botones},"titulo","nombre de botones, separados, por, comas, en, la, misma, cadena");

	}, false);
});

