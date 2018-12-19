const mongoose = require('mongoose')

const websiteSchema = new mongoose.Schema({
  companyName: {
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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Website', websiteSchema)
