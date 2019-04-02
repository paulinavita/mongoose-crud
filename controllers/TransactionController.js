const mongoose = require('mongoose');
const Transaction = require('../models/Transaction')

class TransactionController {

    static findAll(req,res) {
        Transaction.find({})
        .populate('trans')
        .populate('booklist')
        .then(trans => {
            console.log('finding all trans')
            if (!req.query) res.status(200).json({data: trans})
            else {
                let arr = []
                trans.forEach(tran => {
                    tran.booklist.forEach(book => {
                        if (book.isbn == req.query.isbn) {
                            arr.push(tran)
                        }
                    })
                })
                res.status(200).json({data: arr})
            }
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }


    static findById(req, res) {
        let id = req.params.id
        Transaction.findOne({_id : id})
        .then(tran => {
            console.log('finding one tran')
            res.status(200).json({data : tran})
        })
        .catch(err =>{
            res.status(400).json({err : err.message})
        })
    }

    static deleteOne (req, res) {
        Transaction.findByIdAndRemove(req.params.id)
        .then(deleted => {
            console.log('deleting one trans')
            res.status(200).json({data : deleted})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    static create(req,res) {
        let newMember = new Transaction(req.body)
        newMember.save()
        .then(saved => {
            console.log('creating new trans')
            res.status(200).json({data : saved})
        })
        .catch(err =>{
            res.status(400).json({err : err.message})
        })
    }


    static updateById (req, res) {
        Transaction.findOneAndUpdate({_id : req.params.id}, {$set : req.body})
        .then(updated => {
            console.log('updating transc')
            res.status(200).json({data : updated})
        })
        .catch (err => {
            res.status(400).json({err : err.message})
        })
    }

    static updateField(req, res) {
        Transaction.findOneAndUpdate({_id : req.params.id}, {$set : req.body})
        .then(updated => {
            console.log('updating transaction')
            res.status(200).json({data : updated})
        })
        .catch (err => {
            res.status(400).json({err : err.message})
        })
    }
}

module.exports = TransactionController