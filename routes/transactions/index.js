const router = require("express").Router()
const TransactionController = require('../../controllers/TransactionController')

router.get("/?", TransactionController.findAll)
router.get("/:id", TransactionController.findById)
router.delete("/:id", TransactionController.deleteOne)
router.post("/", TransactionController.create)
router.put("/:id", TransactionController.updateById)
router.patch("/:id", TransactionController.updateField)


module.exports = router