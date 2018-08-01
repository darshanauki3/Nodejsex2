var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { songname: 'Thaniye
Thananthaniye', Film: 'Rhythm', MusicDirector: 'A.R.Rahman', Singer:'shankar mahadevan'},
    { { songname: 'enano oruvan', Film: 'alai payuthey', MusicDirector: 'A.R.Rahman', Singer:'swarnalatha'},
    { songname: 'Roja poonthottam', Film: 'kannukkul nilavu', MusicDirector: 'llaiyaraaja', Singer:'unnikrishnan anuradha sriram'},
    { songname: 'vennilavae vennilavae vinnaithaandi', Film: 'minsara kanavu', MusicDirector: 'A.R.Rahman', Singer:'Hariharan sadhanasargam'},{ songname: 'sollamal thottu chellum thendral', Film: 'dheena', MusicDirector: 'yuvan shankar raja', Singer:'Hariharan'},
  ];
  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Music");
  var ARRsort = { MusicDirector : "A.R.Rahman"};
  dbo.collection("Details").find().sort(ARRsort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Music");
    dbo.collection("Details").find({MusicDirector : "A.R.Rahman"}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
