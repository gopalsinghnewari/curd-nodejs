const express = require('express');
const { getstudents, getstudentsByID ,createStudent} = require('../controllers/student-controllers');
const router = express.Router();

// get all students
router.get('/getall',getstudents);

// get student by id
router.get('/get/:id',getstudentsByID)

// create student
router.post('/create',createStudent)

module.exports = router


