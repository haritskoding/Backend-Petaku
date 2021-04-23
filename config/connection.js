const mongoose = require("mongoose")
const url = 'mongodb+srv://aris:aris2121!@cluster0.dh4z2.mongodb.net/MapBoxRis?retryWrites=true&w=majority'

//DB Config
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() => console.log('connected'))
    .catch((err) => console.log(err));