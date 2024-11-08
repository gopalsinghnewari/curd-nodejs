// get all student list

const db = require("../config/db");

const getstudents = async (req,res)=>{
    try {
        const deta = await db.query('SELECT * FROM students')
        if (!deta) {
            return res.status(404).send({
                success:false,
                message:"no record found"
            })
        }
        res.status(200).send({
            success:true,
            message:'all students recods',
            deta:deta[0]
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in get all student API',
        })
        
    }
};

// get student by id
const getstudentsByID =async (req,res)=>{
try {
    const studentID = req.params.id
    if (!studentID) {
        return res.status(404).send({
            success:false,
            message:'invalid or provide student id'
        })
    }
    console.log(studentID);
    
    const data = await db.query(`SELECT * FROM students where id=?`,[studentID])
    if (!data) {
        return res.status(404).send({
            success:false,
            message:'no records found'
        })
    }
    res.status(200).send({
        success:true,
        studentsdetails:data[0],
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'error in get student by id API',
        error
    })
    
}
}

const createStudent = async (req, res) => {
    try {
        const { name, city, email } = req.body;

        if (!name || !city || !email) {
            return res.status(400).send({
                success: false,
                message: 'name, city, and email for the new student'
            });
        }

        console.log(`Creating new student with name: ${name}, city: ${city}, email: ${email}`);

        const [result] = await db.query(
            `INSERT INTO students (name, city, email) VALUES (?, ?, ?)`,
            [name, city, email]
        );

        res.status(201).send({
            success: true,
            message: 'Student created successfully',
            studentId: result.insertId
        });
    } catch (error) {
        console.error("Error creating new student:", error);
        res.status(500).send({
            success: false,
            message: 'Error in create student API',
            error
        });
    }
};

module.exports = {getstudents,getstudentsByID,createStudent}