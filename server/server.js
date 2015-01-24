Meteor.publish('spots', function() {
  return Spots.find();
});

<<<<<<< HEAD
Meteor.publish('prefixes', function() {
  return Prefixes.find();
});

=======
Meteor.publish('arrlPrefixes', function() {
  return arrlPrefixes.find();
});
>>>>>>> 246e05315fd0981d0d72e95d75036f537ac089b8
