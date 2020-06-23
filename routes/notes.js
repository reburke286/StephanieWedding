const express = require("express");
const router = express.Router();

const note_controller = require("../controllers/note_controller");

router.post("/api/notes", note_controller.postNote);

router.get("/api/notes", note_controller.getNote);

// router.get("/gifts", note_controller.getNotesPage);

// router.put("/api/notes/:id", note_controller.updatenote);

router.delete("/api/notes/:id", note_controller.deleteNote);

module.exports = router;
