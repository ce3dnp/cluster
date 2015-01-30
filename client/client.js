Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('arrlPrefixes');

if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}