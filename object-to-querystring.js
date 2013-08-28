/**
 * Transforms a JS key:value object into a valid url query string
 *
 * @uses underscore.js (https://github.com/jashkenas/underscore)
 * @return string
 */
Object.prototype.toQueryString = function() {
	
	var response = '';
	var pairs = _.pairs( this );

	_.each( pairs, function( pair ) {
		if ((_.isArray( pair[1] ) && pair[1].length) || pair[1] !== '') {
			var field = pair[0];
			field += _.isArray( pair[1] ) ? '[]' : '';
			field += '=';

			if (_.isArray( pair[1] )) {
				var tmpField = '';
				_.each( pair[1], function( value ) {
					tmpField += field + value + '&';
				});

				response += tmpField;
			}
			else if (_.isBoolean( pair[1] )) {
				if (pair[1]) {
					response += field + '1' + '&';
				}
			}
			else {
				response += field + pair[1] + '&';
			}
		}
	});

	return response.substr(0, response.length - 1);
};
