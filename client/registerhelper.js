
Template.registerHelper("localDateAndTime", function (date) {
	console.log(date);
	if (date)
		return moment(date).format('l LT');
});
