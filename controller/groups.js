import {v4 as uuid} from "uuid";

let groups = [];
let notes =[];


export const getGroups = (req,res) =>{
    res.send(groups);
};

export const createGroup = (req,res) => {
    const group = req.body;
    groups.push({...group, id: uuid()});
    res.send("Response added Sucessfully");
};

export const getNotes = (req,res) => {
    res.send(notes);
};

export const createNote = (req,res) => {
    const note = req.body;
    notes.push({...note, id: uuid()});
    res.send("Response added Sucessfully");
};

