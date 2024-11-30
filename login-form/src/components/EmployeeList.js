import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../services/employeeService";
import EmployeeItem from "./EmployeeItem";

function EmployeeList() {
	const [employeeList, setEmployeeList] = useState();

	useEffect(() => {
		setEmployeeList(getAllEmployees());
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{employeeList.map((employee) => (
					<EmployeeItem key={employee.id} employee={employee} />
				))}
			</tbody>
		</table>
	);
}

export default EmployeeList;
