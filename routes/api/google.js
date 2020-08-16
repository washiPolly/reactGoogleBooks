const router = require("exporess").Router();
const googleController = require("../../controllers/googleController");

// Matches with "api/google"
router
    .route("/")
    .get(googleController.findAll);

module.exports = router;