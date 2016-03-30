// GET Home page
module.exports.homelist = function(req, res) {
	
/*	The second parameter is a data object being sent
	to the view (the locations-list.jade file).		*/
	res.render('locations-list', { 
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: "Find places to work with wifi near you!"
		},
		sidebar: "Looking for wifi and a seat? Loc8r helps you " +
			"find places to work when out and about. Perhaps with " +
			"coffee, cake or a pint? Let Loc8r help you find the " +
			"place you're looking for.",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
			distance: '100m'
		},{
			name: 'Cafe Hero',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
			distance: '220m'
		}, {
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 2,
			facilities: ['Hot Drinks', 'Food'],
			distance: '350m'
		}]

	});
};
// GET Location Info page
module.exports.locationInfo = function(req, res) {
	res.render('location-info', { title: 'Location Info' });
};
// GET Add Review page
module.exports.addReview = function(req, res) {
	res.render('location-review-formm', { title: 'Add Review' });
};