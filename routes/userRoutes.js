const express = require("express");
const {
  loginController,
  applyDoctorController,
  registerController,
  authController,
  getAllNotificationController,
  deleteAllController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//login
router.post("/login", loginController);
//register
router.post("/register", registerController);

router.post("/getUserData", authMiddleware, authController);
//applyDoctor
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//notification
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//book appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

// availability controller
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);
//get all doc
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

router.get("/user-appointments", authMiddleware, userAppointmentsController);
router.post("/delete-all-notification", authMiddleware, deleteAllController);
module.exports = router;
