import React from "react";

function EmployeeItem(props) {
	const { id, name, age } = props.employee;
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{age}</td>
		</tr>
	);
}

export default EmployeeItem;
