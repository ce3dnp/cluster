Spots = new Mongo.Collection('spots');

Spots.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

<<<<<<< HEAD
Prefixes = new Mongo.Collection('prefixes');
=======
arrlPrefixes = new Mongo.Collection('arrlPrefixes');

>>>>>>> 246e05315fd0981d0d72e95d75036f537ac089b8
