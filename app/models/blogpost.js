const mongoose = require('mongoose')

const blogpostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Website',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Blogpost', blogpostSchema)
// comments and likes future
