Meteor.publish('spots', function() {
  return Spots.find();
});

Meteor.publish('prefixes', function() {
  return Prefixes.find();
});

