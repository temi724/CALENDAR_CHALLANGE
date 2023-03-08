const mongoose = require('mongoose')

const customerModel = mongoose.model('customerModel', new mongoose.Schema({
      customerName: {
            type: String,
            required: true
      },
      customerEmail: {
            type: String,
            required: true
      },
      appointmentDate: {
            type: Date,
            required: true

      },

      customerRemainder: {
            type: Boolean,

      },

      setReminderInterval: {
            type: Number


      }

}))

exports.customerModel = customerModel;