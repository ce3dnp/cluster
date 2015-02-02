// if the db has no entries then just fill with some test data
// if (Spots.find().count() === 0) {
//   Spots.insert(
//   {
//     dx: 'M0ATZ',
//     freq: '14.020.00',
//     mode: 'CW',
//     timestamp: moment().format('DD-MM-YY HH:mm:ss ZZ'),
//     spotter: 'GX3NWR',
//     comments: 'This guy is working a split 5 KHz up'
//   });

//   Spots.insert(
//   {
//     dx: 'G3NWR',
//     freq: '7.006.99',
//     mode: 'RTTY',
//     timestamp: moment().format('DD-MM-YY HH:mm:ss ZZ'),
//     spotter: 'M0BAU',
//     comments: 'Great conditions this end, 599'
//   });

//   Spots.insert(
//   {
//     dx: 'G6NOI',
//     freq: '14.041.49',
//     mode: 'PSK',
//     timestamp: moment().format('DD-MM-YY HH:mm:ss ZZ'),
//     spotter: 'G3OTW',
//     comments: 'Great one for the log tks'
//   });
// }

// if the db has no entries then just fill with some test data
if (arrlPrefixes.find().count() === 0) {
  arrlPrefixes.insert(
  {
    pref: 'G',
    entity: 'England',
    continent: 'EU',
    ituZone: '27',
    cqZone: '14',
    entityCode: '223'
  });

  arrlPrefixes.insert(
  {
    pref: 'E5',
    entity: 'North Cook Is.',
    continent: 'OC',
    ituZone: '62',
    cqZone: '32',
    entityCode: '191'
  });

  arrlPrefixes.insert(
  {
    pref: 'M',
    entity: 'England',
    continent: 'EU',
    ituZone: '27',
    cqZone: '14',
    entityCode: '223'
  });
}