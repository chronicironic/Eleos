const router = require('express').Router();
const ConfigurationController = require('../controllers/Configuration-Controller');

router.delete("/", ConfigurationController.deleteStatus);
router.get("/", ConfigurationController.getStatus);
router.patch("/", ConfigurationController.patchStatus);
router.post("/", ConfigurationController.postStatus);
router.put("/", ConfigurationController.putStatus);

module.exports = router;