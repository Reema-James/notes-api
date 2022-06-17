import express from "express";
import { createGroup, createNote, getFavourites, getGroups, getNotes, deleteGroup, deleteNote, updateGroup, updateNote } from "../controller/groups.js"

const router = express.Router();

router.get("/groups", getGroups);
router.post("/group", createGroup);
router.get("/notes", getNotes);
router.post("/note",createNote);
router.get("/favourites", getFavourites);


router.delete( `/groups:id`, deleteGroup);
router.delete( `/notes:id`, deleteNote);

router.put( `/groups:id`, updateGroup);
router.put( `/notes:id`, updateNote);


export default router;