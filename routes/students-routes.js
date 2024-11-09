const express = require('express');
const { getstudents, getstudentsByID ,createStudent, updatestudent, deletestudent} = require('../controllers/student-controllers');
const router = express.Router();

// get all students
router.get('/getall',getstudents);

// get student by id
router.get('/get/:id',getstudentsByID)

// create student
router.post('/create',createStudent)

// update student
router.put('/update/:id',updatestudent)
 
// delete student
router.delete('/delete/:id',deletestudent)

module.exports = router


