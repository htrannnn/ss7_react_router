import React from "react";

function StudentItem(props) {
	const { id, name, phone, email } = props.student;

	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td className="text-center">
				<button type="button" className="btn btn-secondary rounded-0 me-2">
					Edit
				</button>
				<button type="button" className="btn btn-secondary rounded-0">
					Delete
				</button>
			</td>
		</tr>
	);
}

export default StudentItem;
