const router = require('express').Router();
const BudgetController = require('../controllers/Budget-Controller');

router.delete("/", BudgetController.deleteStatus);
router.get("/", BudgetController.getStatus);
router.patch("/", BudgetController.patchStatus);
router.post("/", BudgetController.postStatus);
router.put("/", BudgetController.putStatus);

module.exports = router;