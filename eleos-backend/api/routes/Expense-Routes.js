const router = require('express').Router();
const ExpenseController = require('../controllers/Expense-Controller');

router.delete("/", ExpenseController.deleteStatus);
router.get("/", ExpenseController.getStatus);
router.patch("/", ExpenseController.patchStatus);
router.post("/", ExpenseController.postStatus);
router.put("/", ExpenseController.putStatus);

module.exports = router;