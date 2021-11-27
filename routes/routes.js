const router = require("express").Router();
const videoController = require("../controller/video.controller");

router.get("/:videoId", videoController.streamVideo);

module.exports = router;
