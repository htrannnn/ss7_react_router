import React, { useEffect, useRef, useState } from "react";
import { getAllStudent, searchByName } from "../services/studentService";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";
import DeleteComponent from "./DeleteComponent";

function StudentList() {
	const [studentList, setStudentList] = useState([]);
	const [show, setShow] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState({});

	useEffect(() => {
		setStudentList(getAllStudent());
	}, []);

	const searchRef = useRef();

	const showModal = (student) => {
		setShow(true);
		setSelectedStudent(student);
	};

	const closeModal = () => {
		setShow(false);
		setSelectedStudent({});
	};

	const deleteStudent = (student) => {
		setStudentList(studentList.filter((students) => students.id !== selectedStudent.id));
		closeModal();
	};

	const handleSearch = () => setStudentList(() => [...searchByName(searchRef.current.value)]);

	return (
		<div className="container my-3">
			<div className="item-group">
				<Link className="btn btn-secondary rounded-0 w-25" id="add-link" to="/students/add_students">
					Add Student
				</Link>

				<div className="input-group ms-5 w-25" id="search">
					<input type="text" className="form-control rounded-0" placeholder="Search students" ref={searchRef} />
					<button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2" onClick={handleSearch}>
						Search
					</button>
				</div>
			</div>
			<table className="table table-striped table-light">
				<thead>
					<tr>
						<th>STT</th>
						<th>ID</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((student, i) => (
						<StudentItem key={student.id} student={student} i={i} showModal={showModal} />
					))}
				</tbody>
			</table>
			<DeleteComponent show={show} student={selectedStudent} deleteStudent={deleteStudent} closeModal={closeModal} />
		</div>
	);
}

export default StudentList;
