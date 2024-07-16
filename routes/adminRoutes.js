const express = require("express");

const { getAllUsers, getAllDoctors, changeAccountStatusController } = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/getAllUsers", authMiddleware, getAllUsers);

router.get("/getAllDoctors", authMiddleware, getAllDoctors);


//Account status
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController)
module.exports = router;
