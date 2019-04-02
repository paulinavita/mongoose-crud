const router = require("express").Router()
const MemberController = require('../../controllers/MemberController')

router.get("/", MemberController.findAll)
router.get("/:id", MemberController.findById)
router.post("/", MemberController.createData)
router.delete("/:id", MemberController.deleteOne)
router.put("/:id", MemberController.updateById)
router.patch("/:id", MemberController.updateField)


module.exports = router