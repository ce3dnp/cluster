Template.mainBody.helpers({
  spots: function () {
    return Spots.find( {}, {sort: {timestamp: -1 }});
  },
  clusterCount: function () {
    return Spots.find().count();
  }
});

Template.mainLeftCol.events({
  'submit form': function(e) {
    e.preventDefault()

    var callsign = $(e.target).find('[id=dxCallSign]').val().toUpperCase();
    var prefix = callsign.slice(0,1);

    // check the arrlPrefixes db to see if the prefix exists, if so add the metadata
    var dxccEntry = arrlPrefixes.findOne({pref: prefix});
    if (dxccEntry) {
        var entity = dxccEntry.entity.toUpperCase();    
        var continent = dxccEntry.continent.toUpperCase();
        var ituZone = dxccEntry.ituZone;
        var cqZone = dxccEntry.cqZone;
        var entityCode = dxccEntry.entityCode; 
    }

    // insert the spot into the spots db
    var spot = {
      dx:   callsign,
      freq: $(e.target).find('[id=freq]').val(),
      mode: $(e.target).find('[id=mode]').val(),
      timestamp: new Date(),
      spotter: Meteor.users.findOne().username.toUpperCase(),
      comments: $(e.target).find('[id=comments]').val(),
      prefix: prefix,
      entity: entity,
      continent: continent,
      ituZone: ituZone,
      cqZone: cqZone,
      entityCode: entityCode
    };

    spot._id = Spots.insert(spot);
    $('.dxSpotForm').trigger("reset");
    $('#dxCallSign').focus();
  }
});

