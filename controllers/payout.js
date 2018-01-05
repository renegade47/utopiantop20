/**
 * GET /
 */
exports.payout = function(req, res) {
	var sql = require("seriate");
	var config = {
	    "server": "sql.steemsql.com",
	    "user": "steemit",
	    "password": "steemit",
	    "database": "DBSteem"
	};

	sql.setDefaultConfig( config );

	sql.execute( {
	        query: sql.fromFile( "../sql/top20value.sql" )
	    } ).then( function( results ) {
	    	res.render('payout', {data:results, title:'Payout'} );
	    }, function( err ) {
	        res.render('deadlock', {error: err});
    } );
};


