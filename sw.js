var nombreCache = 'holaMundo';
self.addEventListener(
	'install',
	function(evento){
		evento.waitUntil(
			caches.open(nombreCache)
			.then(
				function(cache){
					cache.addAll(
						[
							'script.js',
							'hola.jpg'
						]
					);
				}
			)
		);
	}
);

self.addEventListener(
	'fetch',
	function(evento){
		evento.respondWith(
			caches.match(evento.request)
			.then(
				function(respuesta){
					if(respuesta){
						return respuesta;
					}
					return fetch(evento.request);
				}
			)
		);
	}
);