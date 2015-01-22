Router.configure({
  	layoutTemplate: 'layout',
  	loadingTemplate: 'loading',
  	notFoundTemplate: 'notFound',
	waitOn: function() 
	{ 
		return Meteor.subscribe('spots');
	}
});

Router.route('/', {name: 'header'});
Router.onBeforeAction('dataNotFound', {only: 'postPage'});