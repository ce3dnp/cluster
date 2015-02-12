Template.sidebar.helpers({
  loggedInUser: function () {
  	if ( Meteor.user() )
    	return Meteor.users.findOne().username.toUpperCase();
  }
});
