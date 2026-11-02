const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
        },
        rollNumber: {
            type: String,
            required: [true, 'Please provide a roll number'],
            unique: true,
        },
        department: {
            type: String,
            required: [true, 'Please provide a department'],
        },
        email: {
            type: String,
            required: [true, 'Please provide an email address'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Student', studentSchema);
