const mongoose = require('mongoose')

const Posts = mongoose.model('Blog', {
    title: String,
    body: String,
    // comments:[{body: String, date: Date }],
   // date: {type: Date, dafault: Date.now},
})

module.exports = Posts