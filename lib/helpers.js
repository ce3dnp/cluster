UI.registerHelper("localDateAndTime", function (date) {
	if (date)
		return moment(date).format('DD/MM/YYYY - HH:mm:ss ');
});

Meteor.methods({
	spotInsert: function(spotAttributes) {
		// check(Meteor.userId(), String);
		// check(spotAttributes, {
		// 	dx: String, 
		// 	mode: String
		// });
		var user = Meteor.user();
		var spot = _.extend(spotAttributes, {
			userId: user._id,
			spotter: user.username,
			timestamp: new Date()
		})
		spot._id = Spots.insert(spot);
	}
});