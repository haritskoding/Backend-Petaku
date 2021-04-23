const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//register
router.post("/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        console.log(req.body.username)
        console.log(req.body.email)
        console.log(hashedPassword)
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        //save user and save response
        const user = await newUser.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
})

//login
router.post("/login", async (req, res) => {
    try {
        //find user
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json("Wrong user name or password")

        //validate user
        const validatePassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        console.log(user.username)

        !validatePassword && res.status(400).json("Wrong user name or password")

        res.status(200).json({ _id: user._id, username: user.username })

        //send res
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})


module.exports = router