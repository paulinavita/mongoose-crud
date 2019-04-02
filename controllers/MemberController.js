const mongoose = require('mongoose');
const Member = require('../models/Member')

class MemberController {

    static findAll(req,res) {
        Member.find({})
        .then(members => {
            console.log('finding all members')
            res.status(200).json({data: members})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    static findById(req, res) {
        let id = req.params.id
        Member.findOne({_id : id})
        .then(member => {
            console.log('finding one member by id')
            res.status(200).json({data : member})
        })
        .catch(err =>{
            res.status(400).json({err : err.message})
        })
    }

    static createData(req,res) {
        let newMember = new Member(req.body)
        newMember.save()
        .then(saved => {
            console.log('creating new member')
            res.status(200).json({data : saved})
        })
        .catch(err =>{
            res.status(400).json({err : err.message})
        })
    }

    static deleteOne (req, res) {
        Member.findByIdAndRemove(req.params.id)
        .then(deleted => {
            console.log('deleting one member')
            res.status(200).json({data : deleted})
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

    static updateById (req, res) {
        Member.findByIdAndUpdate(req.params.id, {$set : req.body})
        .then(updated => {
            console.log('updating book by id')
            res.status(200).json({data : updated})
        })
        .catch (err => {
            res.status(400).json({err : err.message})
        })
    }

    static updateField(req, res) {
        Member.findByIdAndUpdate(req.params.id, {$set : req.body})
        .then(updated => {
            console.log('updating book by id')
            res.status(200).json({data : updated})
        })
        .catch (err => {
            res.status(400).json({err : err.message})
        })
    }
}

module.exports = MemberController