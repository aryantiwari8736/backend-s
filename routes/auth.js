const auth = require("express").Router();
const User = require("../models/User")
auth.get("/register", async(req,res)=>{
  const user = await new User({
      username:"Aryan Tiwari ",
      email:"thearyantiwari123@GMAIL.com",
      password: "123456"
  })
  await user.save()
  res.send("ok");
})


module.exports = auth


