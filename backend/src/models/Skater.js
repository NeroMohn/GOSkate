const mongoose = require('mongoose');

const SkaterSchema = new mongoose.Schema({
    name : String,
    userName : String,
    bio : String,
    avatarUrl : String,
    knownTricks : [String]
});

module.exports = mongoose.model('Skater', SkaterSchema);