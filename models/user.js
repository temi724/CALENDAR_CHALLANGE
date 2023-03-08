const mongoose = require('mongoose')

const user = mongoose.model('user', new mongoose.Schema({
      customerName: {
            type: String,
            required: true
      },

      appointments: [{ name: String, date: Date }]




}))

exports.user = user;