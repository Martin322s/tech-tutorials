const Course = require('../models/Course');
const User = require('../models/User');

exports.createCourse = async (courseData) => await Course.create(courseData);
exports.getAllCourses = async () => await Course.find().lean();
exports.getOneCourse = async (courseId) => await Course.findById({ _id: courseId }).populate('_ownerId').populate('usersEnrolled');
exports.enrollCourse = async (courseId, userId) =>
    await Course.findByIdAndUpdate(
        { _id: courseId },
        { $push: { usersEnrolled: userId } }
    );

