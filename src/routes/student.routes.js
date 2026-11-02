const express = require('express');
const router = express.Router();
const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} = require('../controllers/studentController');

// Base route: /api/students
router.route('/').post(createStudent).get(getStudents);

// Route with parameter: /api/students/:id
router.route('/:id').get(getStudentById).put(updateStudent).delete(deleteStudent);

module.exports = router;