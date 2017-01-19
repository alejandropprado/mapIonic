app.controller('mapCtrl', ['$scope', '$cordovaGeolocation', 'ApiAddress',
	function($scope, $cordovaGeolocation, ApiAddress){

		$scope.load = true;
		$scope.AllAddress = [];

		ApiAddress.Api('GET', {})
		.then( function(data){

			$scope.AllAddress = data.IAddress;
			$scope.load = false;

			showMap(true);
			
		}).catch( function(err){
			console.log(err);
		});

		$scope.show = function(obj){
			if(!obj){
				showMap(true);
			}else{
				showMap(false, obj.coords[0].latitude, obj.coords[0].longitude, obj.name);
			}
			
		};

		function showMap(init, lat, lon, nombre) {
			var options = {timeout: 10000, enableHighAccuracy: true};
			$cordovaGeolocation.getCurrentPosition(options).then(function(position){

				var latLng ;
				var content ;

				if(init){
					latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					content = "Aquí estoy yo";
				}else {
					latLng = new google.maps.LatLng(lat, lon);
					content = nombre;
				}

				var mapOptions = {
					center: latLng,
					zoom: 17,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

				google.maps.event.addListenerOnce($scope.map, 'idle', function(){
					
					var marker = new google.maps.Marker({
						map: $scope.map,
						animation: google.maps.Animation.DROP,
						position: latLng
					});      

					

					var infoWindow = new google.maps.InfoWindow({						
						content: content
					});

					google.maps.event.addListener(marker, 'click', function () {
						infoWindow.open($scope.map, marker);
					});  

				});

			}, function(error){
				console.log(error);
			});
		}

	}])

