//This funtion sends email to user on registration
export const registrationEmailSender = (email) => {
      const uniquePass = "squwyqf^@167271992o"
      console.log(uniquePass, email)

}
//This funtion sends email to user on registration
export const reminderEmail = (email, time) => {
      console.log("Yeeeee! your appointment is in " + time + "mins")

}
//This funtion sends email to user when appointment is deleted
export const deletionEmailSender = (email) => {
      console.log("sent", email)

}
//This funtion sends email to user when appointment is rescheduled
export const rescheduleEmailSender = (email) => {
      console.log("sent", email)

}