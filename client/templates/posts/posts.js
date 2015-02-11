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
      comments: $(e.target).find('[id=comments]').val(),
      prefix: prefix,
      entity: entity,
      continent: continent,
      ituZone: ituZone,
      cqZone: cqZone,
      entityCode: entityCode
    };

    Meteor.call('spotInsert', spot, function (error, result) {
      if (error)
        if (error.error == "500") {
          return alert ("Sorry, you must be logged in to post!");
        }
        else {
          return alert (error.reason); 
        }       
    });
    $('.dxSpotForm').trigger("reset");
    $('#dxCallSign').focus();
  }
});

