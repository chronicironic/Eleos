const router = require('express').Router();
const ReportController = require('../controllers/Report-Controller');

router.delete("/", ReportController.deleteStatus);
router.get("/", ReportController.getStatus);
router.patch("/", ReportController.patchStatus);
router.post("/", ReportController.postStatus);
router.put("/", ReportController.putStatus);

module.exports = router;