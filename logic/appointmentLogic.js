const express = require('express')
const { customerModel } = require('../models/customerModel')
const { emailSender } = require('../models/emailServices')
const { user } = require('../models/user')
const router = express.Router()



//User apointments
router.get('/', async (req, res) => {
      const userAppointments = await user.find()
      res.send(getDetailsOfAppointment)

})


//Create an appointment.....
router.post('/appointment', async (req, res) => {
      //    const date=new Date()
      const customer = new customerModel({
            customerName: req.body.customerName,
            customerEmail: req.body.customerEmail,
            customerRemainder: req.body.customerRemainder,
            setReminderIntercal: req.body.setReminderInterval,
            appointmentDate: req.body.appointmentDate

      })
      customer.save((err, result) => {
            if (err) {
                  console.log("something went wrong")
            }
            emailSender(req.body.customerEmail)
            return ("yeeee")
      })

})

// You have to be logged in.......
router.put("/:id", auth, async (req, res) => {
      //Confirms appointment is available on the db...
      const getAppointmentInfo = await customerModel.findById(req.params.id)
      if (!getAppointmentInfo) return res.status("lol, user does not have a record")
      const customer = new customerModel({
            customerName: req.body.customerName,
            customerEmail: req.body.customerEmail,
            customerRemainder: req.body.customerRemainder,
            setReminderIntercal: req.body.setReminderInterval,
            appointmentDate: req.body.appointmentDate

      })
      customer.save((err, result) => {
            if (err) {
                  console.log("something went wrong")
            }
            emailSender(req.body.customerEmail)
            return ("yeeee")
      })





})

router.put("/:uniquepass", async (req, res) => {
      //Confirms appointment is available on the db...
      const getAppointmentInfo = await customerModel.findBy(req.params.uniquePass)
      if (!getAppointmentInfo) return res.status("lol, user does not have a record")


})