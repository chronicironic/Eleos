const router = require('express').Router();
const AuthenticationController = require('../controllers/Authentication-Controller');

router.delete("/", AuthenticationController.deleteStatus);
router.get("/", AuthenticationController.getStatus);
router.patch("/", AuthenticationController.patchStatus);
router.post("/", AuthenticationController.postStatus);
router.put("/", AuthenticationController.putStatus);

module.exports = router;