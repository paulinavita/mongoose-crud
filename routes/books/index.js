const router = require("express").Router()
const BookController = require('../../controllers/BookController')

router.get("/?", BookController.findAll)
router.get("/:id", BookController.findById)
router.post("/", BookController.createData)
router.delete("/:id", BookController.deleteOne)
router.put("/:id", BookController.updateById)
router.patch("/:id", BookController.updateField)




module.exports = router