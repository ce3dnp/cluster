UI.registerHelper("localDateAndTime", function (date) {
	if (date)
		return moment(date).format('DD/MM/YYYY - HH:mm:ss ');
});