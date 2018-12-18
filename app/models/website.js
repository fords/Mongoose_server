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
  background_color: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },

  blogpost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blogpost',
    required: false
  }
  // ,
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
}, {
  timestamps: true
})

module.exports = mongoose.model('Website', websiteSchema)
