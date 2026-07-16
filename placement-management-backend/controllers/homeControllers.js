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

export function gethome(req,res){
    res.status(200).json(students);
};