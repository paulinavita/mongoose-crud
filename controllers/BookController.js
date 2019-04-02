const mongoose = require('mongoose');
const Book = require('../models/Book')

class BookController {

    static findAll (req, res) {
        let query = {}
        if (req.query) {
            let arr = []
            let field = Object.keys(req.query)
                field.forEach((el) => {
                    arr.push({
                        [el] : {$regex : new RegExp(req.query[el], "i") }
                    })
                })

            if (arr.length > 0) {
                query = {$or : arr}
            }
        }
        
        Book.find(query)
        .then(books => {
            console.log('finding all books')
            res.status(200).json({data : books})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    } 


    static findById (req,res) {
        let id = req.params.id
        Book.findOne({_id: id})
        .then(book => {
            if (book) {
                console.log('finding one book by id')
                res.status(200).json({data : book})
            } else if (!book) {
                throw new Error ('No such book')
            }
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    static createData (req,res) {
        // let {isbn, title, author, category, stock } = req.body
        let newBook = new Book (req.body)
        newBook.save()
        .then(saved => {
            console.log('creating new book')
            res.status(200).json({data : saved})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    static deleteOne (req,res) {
        Book.findByIdAndRemove(req.params.id)
        .then(deleted => {
            console.log('deleting one book')
            res.status(200).json({data : deleted})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    static updateById(req, res) {
        Book.findByIdAndUpdate(req.params.id, {$set : req.body})
        .then(updated => {
            console.log('updating book by id')
            res.status(200).json({data : updated})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    static updateField(req, res) {
        Book.findByIdAndUpdate(req.params.id, {$set : req.body})
        .then(updated => {
            console.log('updating book by id')
            res.status(200).json({data : updated})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    // static findByQuery(req,res) {
    //     let query = {}
    //     if (req.query) {
    //         let arr = []
    //         let field = Object.keys(req.query)
    //             field.forEach((el) => {
    //                 arr.push({
    //                     [el] : {$regex : new RegExp(req.query[el], "i") }
    //                 })
    //             })

    //         if (arr.length > 0) {
    //             query = {$or : arr}
    //         }
    //     }
    //         Book.find(query)
    //         .then(books => {
    //             console.log('finding all books')
    //             res.status(200).json({data : books})
    //         })
    //         .catch(err => {
    //             res.status(400).json({err : err.message})
    //         })
    //     } 
}

module.exports = BookController