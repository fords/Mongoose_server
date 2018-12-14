const mongoose = require('mongoose')

const blogpostSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Blogpost', blogpostSchema)
// comments and likes future
