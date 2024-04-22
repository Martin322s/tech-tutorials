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

exports.deleteCourse = async (courseId) => await Course.findByIdAndDelete({ _id: courseId });
exports.getUser = async (userId) => await User.findById({ _id: userId });
exports.updateUser = async (userId, userData) => await User.findByIdAndUpdate(userId, userData);
exports.updateCourse = async (courseId, data) => await Course.findByIdAndUpdate(courseId, data);
exports.getUserByEmail = async (email) => await User.findOne({ email: email });
exports.searchCourse = async (email) => await User.find({ email: email }).populate('enrolledCourses');