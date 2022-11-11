import express from 'express';
import { getAllCourses,createCourse } from '../controllers/courseController.js';

const router=express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses)

//create a new course - only admin
router.route("/createcourse").post(createCourse)

//Add lectures,Delete course ,get course details 



//delete lecture



export default router;