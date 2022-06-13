import express from "express";
import { createGroup, createNote, getGroups, getNotes } from "../controller/groups.js"

const router = express.Router();

router.get("/groups", getGroups);
router.post("/group", createGroup);
router.get("/notes", getNotes);
router.post("/note",createNote);

export default router;