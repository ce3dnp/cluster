Meteor.startup(function() {
  Tracker.autorun(function() {
    console.log('There are ' + Spots.find().count() + ' spots');
  });
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});
