function initMap() {
	//var image = 'https://scontent.cdninstagram.com/t51.2885-19/11856798_1197658663594376_1612912935_a.jpg';
	//var image = 'http://tries.atwebpages.com/logo.png';
	var image = {
		url: './logo1.png',
		scaledSize: new google.maps.Size(35,35)
	}

	var mapOptions = {
		center: {lat: 43.225144, lng: 2.356822}, 
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var infowindow = new google.maps.InfoWindow(); 

	var stores = [
		{
		 	name: 'SA TRAMUNTANA', 
		 	position: {lat: 41.399475, lng: 2.204696}, 
			info: '<strong>Sa Tramuntana</strong> <br>' + 
				  'C/Doctor Trueba, 255 <br> 08005 <br> Barcelona <br>' + 
				  '<a href="http://www.satramuntana.com/">www.satramuntana.com</a>'
		},
		{
			name: 'CABINET', 
			position: {lat: 41.399775, lng: 2.156320}, 
			info: '<strong>Cabinet</strong> <br>' +
			      'C/Sant Dom&egrave;nec, 5 <br> 08012 <br> Barcelona <br>' + 
			      '<a href="http://www.cabinetbcn.com/">www.cabinetbcn.com</a>'
		},
		{
			name: 'TAIMO',
			position: {lat: 41.391256, lng: 2.163925},
			info: '<strong>Taimo</strong> <br>' +
			'C/Arag&oacute;, 266 <br> 08007 <br> Barcelona'
		},
		{
			name: 'HOW', 
			position: {lat: 40.425999, lng: -3.711513}, 
			info: '<strong>How</strong> <br>' + 
				  'C/Conde Duque, 3 <br> 28015 <br> Madrid <br>' + 
				  '<a href="http://www.how-shop.com/">www.how-shop.com</a>'
		},
		{
			name: 'MONDO GALERIA', 
			position: {lat: 40.423752, lng: -3.696306}, 
			info: '<strong>Mondo Galeria</strong> <br>' + 
				  'C/San Lucas, 9 <br> 28004 <br> Madrid <br>' +
				  '<a href="http://www.mondogaleria.com/>www.mondogaleria.com</a>'
		},
		{
			name: 'CONTIGO ALLA FINE DEL MONDO', 
			position: {lat: 40.427794, lng: -3.704476}, 
			info: '<strong>Contigo alla Fine del Mondo</strong> <br>' +
			      'C/Divino Pastor, 16 <br> 28004 <br> Madrid <br>' +
			      '<a href="www.contigomondo.com/">www.contigomondo.com</a>'
		},
		{
			name:'DOCE31', 
			position: {lat: 43.536419, lng: -5.655215}, 
			info: '<strong>DOCE31</strong> <br>' +
			      'C/Alarc&oacute;n, 2 <br> 33205 <br> Gij&oacute;n <br>' + 
			      '<a href="http://www.doce31.com/>www.doce31.com</a>'
		},
		{
			name:'N CONCEPT STORE', 
			position: {lat: 43.324813, lng: -1.973859}, 
			info: '<strong>N Concept Store</strong> <br>' +
				  'C/Zabaleta, 45 <br> 20002 <br> Donostia/San Sebasti&aacute;n'
		},
		{
			name:'VALENTINA', 
			position: {lat: 43.318521, lng: -1.980038}, 
			info: '<strong>Valentina</strong> <br>' + 
			      'C/Bergara, 18 <br> 20005 <br> Donostia/San Sebasti&aacute;n <br>' +
			      '<a href="http://www.valentinashop.es/>www.valentinashop.es</a>'
		},
		{
			name:'EINZELST&Uuml;CK', 
			position: {lat: 47.375186, lng: 8.529295}, 
			info: '<strong>Einzelst&uuml;ck</strong> <br>' +
			      'C/ M&uuml;llerstrasse, 45 <br> 8004 <br> Z&uuml;rich <br>' +
			      '<a href="http://www.einzelstueck.ch">www.einzelstueck.ch</a>'
		},

	];

	setMarkers(); 

	function setMarkers() {
		for (var i = 0; i < stores.length; i++) {
			marker = new google.maps.Marker({
				position: stores[i].position,
				map: map,
				title: stores[i].name,
				icon: image,
			})
			
			//info windows
			marker.addListener('click', function() {
				//get the right content 
				var title = this.title; 
				var content;
				for (var i = 0; i < stores.length; i++) {
					if (stores[i].name === title)
						content = stores[i].info; 
				}

				infowindow.setContent(content); 
				infowindow.open(map, this);
			});
		}
	}

}