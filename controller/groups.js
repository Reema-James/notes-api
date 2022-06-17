import {v4 as uuid} from "uuid";

let groups = [];
let notes =[];
let favourites=[];
let map = new Map();

export const getGroups = (req,res) =>{
    res.send(groups);
};

export const createGroup = (req,res) => {
    const group = req.body;
    groups.push({...group, id: uuid()});
    res.send("Response added Sucessfully");
};

export const getNotes = (req,res) => {
    let id=req.params.id;
    if(map.has(id)){
        res.send(map.get(id));
    }
    res.send([]);
};

export const createNote = (req,res) => {
    let id=req.params.id;
    const note = req.body;
    const noteId=uuid();
    const newNote= {...note, noteId, favourite:false};
    if(map.has(id)){
        map.get(id).push(newNote);
    }

    else{
        const newNoteList=[newNote];
        map.set(id, newNoteList);
    }
    res.send("Response added Successfully");
};

export const getFavourites = (req,res) =>{
    for(let i=0; i<notes.length; i++)
    if (notes[i].favourites==1){
        res.send(notes[i]);
    }
    
};


export const deleteGroup=(req,res)=>{
    let idnew=req.params.id;
    
    for(let i=0;i<groups.length;i++)
    {

        
       if(idnew==":"+groups[i].id)
         
             groups.splice(i,1);

            }
            return res.json({success:200, message:'The selected Group has been deleted'})
            }
        
        
            
        
export const deleteNote=(req,res)=>{
    let idnew=req.params.id;
            
            for(let i=0;i<notes.length;i++)
            {
                if(idnew==":"+notes[i].id)
         
                notes.splice(i,1);
    
           }
       return res.json({success:200, message:'The selected Note has been deleted'})
   }
   
   
   export const updateGroup=(req,res)=>{
       let idnew=req.params.id;
       
       for(let i=0;i<groups.length;i++)
       {
        if(idnew==":"+groups[i].id)
         
             groups.splice(i,1);
 
        }
    
    
   

     let group=req.body;
     groups.push({...group, id: idnew});


    return res.json({success:200, message:'The selected Group has been Updated'})
}

export const updateNote=(req,res)=>{
    let idnew=req.params.id;
    for(let i=0;i<groups.length;i++)
    {

        
       if(idnew==":"+groups[i].id)
         
             groups.splice(i,1);
 
        }
    
    
   

     let group=req.body;
     groups.push({...group, id: idnew});


    return res.json({success:200, message:'The selected Note has been Updated'})
}
        