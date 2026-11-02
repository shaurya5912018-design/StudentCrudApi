const Student = require('../models/Student');

// @desc    Create a new student
// @route   POST /api/students
exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({ success: true, data: student });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Get all students
// @route   GET /api/students
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ success: true, count: students.length, data: students });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get single student by ID
// @route   GET /api/students/:id
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, error: 'Student not found' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Update student
// @route   PUT /api/students/:id
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!student) {
            return res.status(404).json({ success: false, error: 'Student not found' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, error: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};