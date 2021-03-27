const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    githubLink: String,
    otherLink: String,
    tech: [
        {type: String}
    ]
})

module.exports = mongoose.model('Projects', projectSchema);