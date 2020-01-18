// Setup datastore
var Datastore = require('nedb')
  , db = new Datastore({ filename: '../data/entities.json', autoload: true });

module.exports = db
