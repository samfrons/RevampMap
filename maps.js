           // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 2,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                          {
                            "featureType": "landscape.natural",
                            "elementType": "geometry.fill",
                            "stylers": [
                              { "weight": 8 },
                              { "saturation": 51 },
                              { "visibility": "on" },
                              { "hue": "#e6ff00" },
                              { "lightness": -42 }
                            ]
                          },{
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                              { "visibility": "on" },
                              { "color": "#1c79bc" },
                              { "lightness": -3 },
                              { "gamma": 1.49 },
                              { "invert_lightness": true },
                              { "hue": "#0077ff" },
                              { "saturation": -17 }
                            ]
                          },{
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              { "hue": "#ff3c00" },
                              { "saturation": 100 },
                              { "lightness": 100 },
                              { "weight": 0.1 }
                            ]
                          },{
                            "featureType": "water",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              { "weight": 8 },
                              { "saturation": 100 },
                              { "lightness": -76 },
                              { "hue": "#0008ff" },
                              { "visibility": "on" },
                              { "gamma": 1.13 }
                            ]
                          },{
                            "featureType": "administrative.country",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              { "gamma": 0.72 },
                              { "hue": "#fff700" },
                              { "color": "#3e6be8" },
                              { "saturation": -17 },
                              { "weight": 1.1 }
                            ]
                          },{
                            "featureType": "administrative.country",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              { "visibility": "off" }
                            ]
                          },{
                            "featureType": "administrative.country",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              { "visibility": "on" },
                              { "color": "#266cd5" },
                              { "saturation": 62 },
                              { "lightness": -25 },
                              { "hue": "#002bff" }
                            ]
                          },{
                            "featureType": "water",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              { "gamma": 0.85 },
                              { "lightness": -14 },
                              { "weight": 0.1 },
                              { "visibility": "off" }
                            ]
                          },{
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              { "color": "#ffffff" },
                              { "saturation": 100 },
                              { "lightness": 100 },
                              { "gamma": 0.9 },
                              { "weight": 0.1 }
                            ]
                          },{
                          }
                        ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using out element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);



                //map 2

                var mapOptions2 = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"simplified"},{"color":"#ffe24d"}]},{"featureType":"road","stylers":[{"visibility":"simplified"},{"color":"#158c28"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"simplified"},{"color":"#37b34a"}]},{"featureType":"water","stylers":[{"color":"#ffe24d"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"},{"color":"#8bc53f"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#808080"},{"gamma":9.91},{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"lightness":100},{"visibility":"on"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement2 = document.getElementById('map2');

                // Create the Google Map using out element and options defined above
                var map2 = new google.maps.Map(mapElement2, mapOptions2);


            


                var mapOptions3 = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"simplified"},{"color":"#ffe24d"}]},{"featureType":"road","stylers":[{"visibility":"simplified"},{"color":"#158c28"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"simplified"},{"color":"#37b34a"}]},{"featureType":"water","stylers":[{"color":"#ffe24d"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"},{"color":"#8bc53f"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#808080"},{"gamma":9.91},{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"lightness":100},{"visibility":"on"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement3 = document.getElementById('map3');

                // Create the Google Map using out element and options defined above
                var map3 = new google.maps.Map(mapElement3, mapOptions3);


            }


