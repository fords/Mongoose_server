const mongoose = require('mongoose')

const websiteSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blogpost',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Website', websiteSchema)
