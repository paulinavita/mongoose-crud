const router = require("express").Router()
const bookRoutes = require('../routes/books')
const memberRoutes = require('../routes/members')
const transactionsRoutes = require('../routes/transactions')

router.get("/", (req, res) => {
    res.status(200).json({message : 'connected'})
})

router.use("/books", bookRoutes)
router.use("/members", memberRoutes)
router.use("/transactions", transactionsRoutes)


module.exports = router