const router = require('express').Router();
const UserController = require('../controllers/User-Controller');

router.delete("/", UserController.deleteStatus);
router.get("/", UserController.getStatus);
router.patch("/", UserController.patchStatus);
router.post("/", UserController.postStatus);
router.put("/", UserController.putStatus);

module.exports = router;