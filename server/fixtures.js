
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