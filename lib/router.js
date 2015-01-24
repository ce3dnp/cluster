Router.configure({
  	layoutTemplate: 'layout',
  	loadingTemplate: 'loading',
  	notFoundTemplate: 'notFound',
	waitOn: function() 
	{ 
		return Meteor.subscribe('spots');
	}
});

<<<<<<< HEAD
Router.route('/', {name: 'header'});
=======
Router.route('/', {name: 'spotsList'});
>>>>>>> 246e05315fd0981d0d72e95d75036f537ac089b8
Router.onBeforeAction('dataNotFound', {only: 'postPage'});