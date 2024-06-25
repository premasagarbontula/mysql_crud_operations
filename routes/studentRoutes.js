const express = require("express");
const {
  getAllStudentsController,
  getStudentController,
  createStudentController,
  updateStudentController,
  deleteStudentController,
} = require("../controller/studentController");

//router object
const router = express.Router();

//routes
router.get("/get-all", getAllStudentsController);
router.get("/get/:id", getStudentController);
router.post("/create", createStudentController);
router.put("/update/:id", updateStudentController);
router.delete("/delete/:id", deleteStudentController);

module.exports = router;
