import React from "react";
import { Link } from "react-router-dom";

function StudentItem(props) {
	const { id, name, phone, email } = props.student;

	return (
		<tr>
			<td>{+props.i + 1}</td>
			<td>{id}</td>
			<td>{name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td className="text-center">
				<Link type="button" className="btn btn-secondary rounded-0 me-2" to={"/students/detail_students/" + id}>
					Detail
				</Link>
				<button type="button" className="btn btn-secondary rounded-0" onClick={() => props.showModal(props.student)}>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default StudentItem;
