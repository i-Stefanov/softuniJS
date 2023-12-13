// const CourseModel = require("../models/course.js");
const userService = require("./userService.js");

// ? check model name
const getAllPublic = () => {
  return CourseModel.find({ isPublic: true }).sort({ addedOn: -1 }).lean();
};

// ? check model name
const create = (data) => {
  return CourseModel.create(data);
};

// ? check model name
const getAll = () => {
  return CourseModel.find({}).lean();
};

// ? check model name
const getOne = (id) => {
  return CourseModel.findById(id).populate("students").lean();
};

// ? check model name
const updateOne = (id, data) => {
  return CourseModel.findByIdAndUpdate(id, data, { runValidators: true, new: true });
};

// ? check model name
const deleteOne = (id) => {
  return CourseModel.findByIdAndDelete(id);
};

// ? check model name
const join = async (courseId, user) => {
  const course = await CourseModel.findById(courseId);
  console.log(user.id);
  course.students.push(user.id);
  await userService.enrollInCourse(courseId, user.id);
  return course.updateOne({ $set: { students: course.students } });
};

// ? check model name
const search = async (typeStr) => {
  console.log(typeStr);
  const searchObj = { type: new RegExp(typeStr, "i") };
  return CourseModel.find(searchObj).lean();
};

const houseService = { getAllPublic, create, getAll, getOne, updateOne, deleteOne, join, search };

module.exports = houseService;
