Spots = new Mongo.Collection('spots');

Spots.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

Prefixes = new Mongo.Collection('prefixes');
