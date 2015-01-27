Meteor.publish('spots', function() {
  return Spots.find();
});

Meteor.publish('arrlPrefixes', function() {
  return arrlPrefixes.find();
});

