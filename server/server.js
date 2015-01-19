Meteor.publish('spots', function() {
  return Spots.find();
});