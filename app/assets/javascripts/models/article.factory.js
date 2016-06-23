angular.module('pansionatApp')
  .factory("Article", function ($resource) {
    return $resource('/articles/:id', 
      { 
        id: '@id'
      },
    {
    	'query': { method: 'GET', isArray: true,
      	headers: {
					'Content-Type': 'application/json',
        	'Accept': 'application/json'
      	} 
    	},
      'get': { method: 'GET', isArray: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        } 
      }
    });
  });
