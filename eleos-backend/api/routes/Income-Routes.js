const router = require('express').Router();
const IncomeController = require('../controllers/Income-Controller');

router.delete("/", IncomeController.deleteStatus);
router.get("/", IncomeController.getStatus);
router.patch("/", IncomeController.patchStatus);
router.post("/", IncomeController.postStatus);
router.put("/", IncomeController.putStatus);

module.exports = router;