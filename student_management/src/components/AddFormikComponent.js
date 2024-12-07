import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addNewStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

function AddFormikComponent() {
	const [student, setStudent] = useState({ id: "", name: "", phone: "", email: "", address: "" });

	const navigate = useNavigate();

	const handleSubmit = (value) => {
		addNewStudent(value);
		navigate("/students");
	};

	const handleValidate = Yup.object({
		id: Yup.number().required("Yêu cầu không được để trống").min(1, "Hãy điền id hợp lệ!"),
	});

	return (
		<Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
			<Form>
				<div>
					<label>ID:</label>
					<Field type="text" name="id" />
					<ErrorMessage name="id" component="div" />
				</div>
				<div>
					<label>Name:</label>
					<Field type="text" name="name" />
				</div>
				<div>
					<label>Phone:</label>
					<Field type="text" name="phone" />
				</div>
				<div>
					<label>Email:</label>
					<Field type="text" name="email" />
				</div>
				<div>
					<label>Address:</label>
					<Field type="text" name="address" />
				</div>
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default AddFormikComponent;
