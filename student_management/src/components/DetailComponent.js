import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../services/studentService";

function DetailComponent() {
	const [studentDetail, setStudentDetail] = useState({ id: "", name: "", phone: "", email: "", address: "" });

	const { id } = useParams();

	useEffect(() => {
		console.log(id);
		const student = getStudentById(id);

		setStudentDetail(student);
		console.log(student);
	}, [id]);

	return (
		<div className="card-body">
			<h3>Student Detail</h3>
			<p>ID: {studentDetail.id} </p>
			<p>Name: {studentDetail.name}</p>
			<p>Phone: {studentDetail.phone}</p>
			<p>Email: {studentDetail.email}</p>
			<p>Address: {studentDetail.address}</p>
		</div>
	);
}

export default DetailComponent;
