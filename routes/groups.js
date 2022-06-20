import express from "express";
import { createGroup, createNote, getFavourites, getGroups, getNotes, deleteGroup, deleteNote, 
    updateGroup, updateNote, addNoteToFavouriteList, getNotesCount } from "../controller/groups.js"

const router = express.Router();

router.get("/groups", getGroups);
router.post("/group", createGroup);
router.get("/notes:id", getNotes);
router.post("/note:id",createNote);
router.get("/favourites", getFavourites);
router.get("/favourites:id", addNoteToFavouriteList);

router.delete( `/groups:id`, deleteGroup);
router.delete( `/notes:id/group:groupId`, deleteNote);

router.put( `/groups:id`, updateGroup);
router.put( `/notes:id`, updateNote);

router.get("/notes-count:id", getNotesCount);

export default router;