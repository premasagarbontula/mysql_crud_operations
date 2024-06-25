const db = require("../config/db");

//get all students
const getAllStudentsController = async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM crud`);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Student Details",
      data: data[0],
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error Finding All Student Details",
      err,
    });
  }
};

//get student by id
const getStudentController = async (req, res) => {
  try {
    const student_id = req.params.id;
    if (!student_id) {
      return res.status(404).send({
        success: false,
        message: "Provide Valid Student Id",
      });
    }
    const data = await db.query(`SELECT * FROM crud WHERE id = ?`, [
      student_id,
    ]);
    if (!data[0].length) {
      return res.status(404).send({
        success: false,
        message: "No Record Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Individual Student Details",
      data: data[0],
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error Finding Individual Student Details",
      err,
    });
  }
};

//create new student
const createStudentController = async (req, res) => {
  try {
    const { id, name, rollno, age } = req.body;
    if (!id || !name || !rollno || !age) {
      return res.status(505).send({
        success: false,
        message: "Please Provide all fields",
      });
    }
    await db.query(`INSERT INTO crud (id,name,rollno,age) VALUES(?,?,?,?)`, [
      id,
      name,
      rollno,
      age,
    ]);
    res.status(200).send({
      success: true,
      message: "New Student Created",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error Creating New Student",
      err,
    });
  }
};

//update student
const updateStudentController = async (req, res) => {
  try {
    const student_id = req.params.id;
    if (!student_id) {
      return res.status(404).send({
        success: false,
        message: "Provide Valid Student Id",
      });
    }
    const { id, name, rollno, age } = req.body;
    if (!id || !name || !rollno || !age) {
      return res.status(505).send({
        success: false,
        message: "Please Provide all fields",
      });
    }
    await db.query(`UPDATE crud SET name=?,rollno=?,age=? WHERE id=?`, [
      name,
      rollno,
      age,
      student_id,
    ]);
    res.status(200).send({
      success: true,
      message: "Student Details Updated",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error Updating Student Details",
      err,
    });
  }
};

//delete student
const deleteStudentController = async (req, res) => {
  try {
    const student_id = req.params.id;
    if (!student_id) {
      return res.status(404).send({
        success: false,
        message: "Provide Valid Student Id",
      });
    }

    await db.query(`DELETE FROM crud WHERE id=?`, [student_id]);
    res.status(200).send({
      success: true,
      message: "Student Deleted",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error Deleting Student Details",
      err,
    });
  }
};

module.exports = {
  getAllStudentsController,
  getStudentController,
  createStudentController,
  updateStudentController,
  deleteStudentController,
};
