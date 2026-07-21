import "./studentlist.css";
import { Link, useNavigate } from "react-router-dom";
import Studenttable from "../../components/students/Studenttable";
import { useEffect, useState } from "react";
import api from "../../api/api";


function Students({}) {
    const [page,setpage] = useState(1);
    const limit = 5;
    const [totalpages, settotalpages] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    async function fetchStudents() {

        try {
            setLoading(true);
            const response = await api.get(`/students?page=${pageNumber}&limits=${limit}`);
            setStudents(response.data.students);

        } catch (error) {
            console.log(error);
            alert("Failed to fetch students");

        } finally {

            setLoading(false);

        }

    }
    useEffect(() => {
        fetchStudents();
    }, []);

    async function searchStudents(value) {

        setSearch(value);

        if (value.trim() === "") {
            fetchStudents();
            return;
        }

        try {

            const response = await api.get(`/students/search?q=${value}`);

            setStudents(response.data.students);

        } catch (error) {

            console.log(error);

        }

    }

    async function deleteStudent(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {

            const response = await api.delete(`/students/${id}`);

            alert(response.data.message);

            fetchStudents();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );

        }

    }

    if (loading) {
        return <h2>Loading Students...</h2>;
    }

    return (

        <div className="student-page">

            <div className="student-header">

                <div>
                    <h1>Student Management</h1>
                    <p>Manage all registered students.</p>
                </div>

                <Link to="/registration">
                    <button className="add-btn">
                        + Add Student
                    </button>
                </Link>

            </div>

            <input
                type="text"
                className="search-bar"
                placeholder="Search by Student Name"
                value={search}
                onChange={(e) => searchStudents(e.target.value)}
            />

            <Studenttable
                students={students}
                deleteStudent={deleteStudent}
            />

        </div>

        );

}
export default Students;