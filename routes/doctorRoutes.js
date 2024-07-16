const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorCtrl");

const router = express.Router();
//post get single doc
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);
//Get doctor
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
//post update profile
router.post("/updateProfile", authMiddleware, updateProfileController);
module.exports = router;
