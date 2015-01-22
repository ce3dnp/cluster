Template.header.helpers({
  spots: function () {
    return Spots.find( {}, {sort: {timestamp: -1 }});
  },
  clusterCount: function () {
    return Spots.find().count();
  }
});

Template.header.events({
  'submit form': function(e) {
    e.preventDefault()

    var spot = {
      dx:   $(e.target).find('[id=dxCallSign]').val().toUpperCase(),
      cc:   'England',
      freq: $(e.target).find('[id=freq]').val(),
      mode: $(e.target).find('[id=mode]').val(),
      timestamp: moment().format('DD-MM-YY HH:mm:ss ZZ'),
      spotter: Meteor.users.findOne().username.toUpperCase(),
      comments: $(e.target).find('[id=comments]').val()
    };

    spot._id = Spots.insert(spot);
  }
});

