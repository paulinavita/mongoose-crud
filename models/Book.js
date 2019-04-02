const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    isbn: {
        type : String,
        required : [true, 'ISBN is required']
    },
    title : {
        type : String,
        required : [true, 'Title is required']
    },
    author : {
        type : String,
        required : [true, 'Author is required']
    },
    category: {
        type : String,
        required : [true, 'Category is required']
    },
    stock: Number
})

module.exports = mongoose.model('Book', bookSchema)
