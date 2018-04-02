// Set up the opinion database
const db = new Mongo().getDB('jobs');
db.dropDatabase();

// Validate collections

db.createCollection('applicants', {validator: {$and: [
  {first: {$type: 'string', $ne: ''}},
  {last: {$type: 'string', $ne: ''}},
  {city: {$type: 'string', $ne: ''}},
  {state: {$type: 'string', $ne: ''}},
  {skills: {$type: 'array'}},
  {jobs_interest: {$type: 'array'}},
]}});

db.createCollection('employers', {validator: {$and: [
  {company: {$type: 'string', $ne: ''}},
  {city: {$type: 'string', $ne: ''}},
  {state: {$type: 'string', $ne: ''}},
  {position: {$type: 'string', $ne: ''}},
  {applicant_id: {$type: 'array'}},
]}});

// Test data

const applicant = db.applicants.insertOne({

});

const employer = db.employers.insertOne({

});

db.applicants.insertMany([
  {

  },
  {

  },
]);

db.employers.insertMany([
  {
  },

  {

  },
]);

// Make it fast to look up all comments on a given opinion
db.applicants.createIndex({opinion_id: 1});
db.opinions.createIndex({'author.id':1})
