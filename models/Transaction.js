const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new mongoose.Schema({
    member: { type: Schema.Types.ObjectId, ref: 'Member' },
    in_date : Date,
    out_date : Date,
    due_date: Date,
    fine: {type : Number, default : null},
    booklist :  [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

transactionSchema.post("findOneAndUpdate", function(doc) {
    dt1 = new Date(doc.due_date);
    dt2 = new Date(doc.in_date);
    // console.log(dt1, '/////')
    // console.log(dt2, '//asdasd///')
    
    let diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24))
    console.log(diff)
    if (diff > 0) {
        doc.fine += (1000 * diff)
    }
    doc.save()
})

module.exports = mongoose.model('Transaction', transactionSchema)
