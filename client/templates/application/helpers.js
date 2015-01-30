Template.sidebar.helpers({
  loggedInUser: function () {
    return Meteor.users.findOne().username.toUpperCase();
  }
});
