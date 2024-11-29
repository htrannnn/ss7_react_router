import React, { useEffect, useRef, useState } from "react";
import { getAllStudent, searchByName } from "../services/studentService";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";

function StudentList() {
	const [studentList, setStudentList] = useState([]);

	useEffect(() => {
		setStudentList(getAllStudent());
	}, []);

	const searchRef = useRef();

	const handleSearch = () => setStudentList(() => [...searchByName(searchRef.current.value)]);

	return (
		<div className="card-body">
			<div className="item-group">
				<Link className="list-group-item list-group-item-action w-25" id="add-link" to="/add_students">
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
						<th>ID</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((student) => (
						<StudentItem key={student.id} student={student} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default StudentList;
