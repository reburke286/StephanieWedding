// Dependencies
const db = require("../models");

// Register a note
exports.postNote = function (req, res) {
  //   console.log(req.body);

  // Post the user-created alert to the table "Note"
  db.Note.create(req.body)
    .then(function (dbNote) {
      console.log(dbNote);
      res.json(dbNote);
    })
    .catch(function (err) {
      res.json(err);
    });
};

// Get a note
exports.getNote = function (req, res) {
  // Get all notes from the table "Notes" and send them to the client-side
  db.Note.findAll({}).then((dbNotes) => {
    // console.log(dbNotes);
    res.json(dbNotes);
  });
};

exports.deleteNote = function (req, res) {
  // Delete user-chosen Note
  db.Note.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbNote) {
    res.json(dbNote);
  });
};
