// if the db has no entries then just fill with some test data
if (Spots.find().count() === 0) {
  Spots.insert(
  {
    dx: 'M0ATZ',
    cc: 'England',
    freq: '14.020.00',
    mode: 'CW',
    timestamp: '16:01:39 13-01-2015',
    spotter: 'GX3NWR',
    comments: 'This guy is working a split 5 KHz up'
  });

  Spots.insert(
  {
    dx: 'G3NWR',
    cc: 'England',
    freq: '7.006.99',
    mode: 'RTTY',
    timestamp: '16:10:39 13-01-2015',
    spotter: 'M0BAU',
    comments: 'Great conditions this end, 599'
  });

  Spots.insert(
  {
    dx: 'G6NOI',
    cc: 'England',
    freq: '14.041.49',
    mode: 'PSK',
    timestamp: '16:20:39 13-01-2015',
    spotter: 'G3OTW',
    comments: 'Great one for the log tks'
  });
}

if (Prefixes.find().count() === 0 ) {
  Prefixes.insert (
  {
    prefix: "G",
    entity: "England",
    continent: "Europe",
    continent_short: "EU",
    itu: "27",
    cq: "14"
  });
}