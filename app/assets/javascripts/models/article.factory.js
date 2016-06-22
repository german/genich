angular.module('pansionatApp')
  .factory("Articles", function ($resource) {
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
    	}
    });
  });