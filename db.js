const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://efoust11_db_user:sdev255_fa25@songdb.j4oz4xi.mongodb.net/?retryWrites=true&w=majority&appName=SongDB",
    {useNewURLParser: true})

module.exports = mongoose