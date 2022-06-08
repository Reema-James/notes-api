const jsonfile=require('jsonfile');

const groupSchema=jsonfile.Schema({
    title: String, 
    description: String
})

exports.Group=jsonfile.model('Group', groupSchema);