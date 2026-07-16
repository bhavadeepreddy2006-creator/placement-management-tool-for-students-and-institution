let students = [
    {
        id:101,
        studentName : "Bhavadeep",
        branch : "Cse",
        cgpa : 8.5
    },
    {
        id:102,
        studentName : "Narendra",
        branch : "Ai",
        cgpa : 8.9
    },
    {
        id:103,
        studentName : "Manu",
        branch : "Aiml",
        cgpa : 9.0
    }
]

export function getStudents(req,res){
    res.status(200).json(students);
};

export function getStudnetById(req,res){
    const id = Number(req.params.id);

    const student = students.find(
        (student)=>student.id === id
    );
    if(!student){
        return res.status(404).json({
            success : false,
            message : "student not found"
        });
    };
    // return student
    res.status(200).json({
        success:true,
        student
    });
};

export function addstudent(req,res){
    // Read the JSON data -- react form
    const student = req.body;
    // VALIDATION
    const id = Number(req.params.id);

    const existingstudent = students.find(
        (s)=>s.id === students.id
    );
    if(existingstudent){
        return res.status(200).json({
            success : false,
            message : "student already found"
        });
    };
    // add into the array
    students.push(student)
    res.status(201).json({
        success : true,
        message : "Student Registered successfully",
        student
    });
};

export function UpdateStudent(req,res){
    const id = Number(req.params.id);
    const UpdateStudent = req.body;
    let studentFound = false;
    students = students.map((student)=>{
        if(student.id === id){
            studentFound = true;
            return{
                ...student, ...UpdateStudent
            };
        };
        return student;
    });
    if(!studentFound){
        return res.status(400).json({
            success : false,
            message : "Student Not Found"
        });
    };
    res.status(200).json({
        success : true,
        message : "Student updated successfully"
    });
};

export function deleteStudent(req,res){
    const id = Number(req.params.id);
    const student = students.find(
        (student)=> student.id === id
    );
    students = students.filter(
        (student)=>student.id !== id
    );
    res.status(200).json({
        success : true,
        message : "Student deleted successfully"
    });
};