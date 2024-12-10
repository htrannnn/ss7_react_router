import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addNewStudent, getAllStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

function AddFormikComponent() {
	const [student, setStudent] = useState({ id: "", name: "", phone: "", email: "", address: "" });

	const navigate = useNavigate();

	const handelSubmit = (value) => {
		const s = { ...value, id: +value.id };

		addNewStudent(s);
		console.log(getAllStudent());
		navigate("/students");
	};

	const handleValidate = Yup.object({
		id: Yup.number().required("Yêu cầu không được để trống").min(1, "Hãy điền id hợp lệ!"),
		name: Yup.string()
			.required("Tên không được để trống")
			.matches(/^[A-ZÀ-Ỹ[a-zà-ỹ]*(\s[A-ZÀ-Ỹ[a-zà-ỹ]*)+$/, "Tên không đúng định dạng"),
		phone: Yup.string()
			.required("Số điện thoại không được để trống")
			.min(0, "Phải là số nguyên dương")
			.matches(/^0[0-9]{9}$/, "Số điện thoại không hợp lệ"),
		email: Yup.string()
			.required("Email không được để trống")
			.min(1, "Phải là số nguyên dương")
			.matches(/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email không hợp lệ"),
		//{2,}: Phần mở rộng phải đảm bảo có 2 kí tự
		address: Yup.string().required("Địa chỉ không được để trống"),
	});

	return (
		<div className="container">
			<h3>Add New Student</h3>
			<Formik initialValues={student} onSubmit={handelSubmit} validationSchema={handleValidate}>
				<Form className="mt-3">
					<div className="row  mb-3 ms-1 align-items-center">
						<label className="col-sm-1">ID:</label>
						<div className="col-sm-4">
							<Field type="text" name="id" className="form-control" placeholder="Enter your id" />
							<ErrorMessage name="id" style={{ color: "red" }} component="div" />
						</div>
					</div>
					<div className="row  mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Name:</label>
						<div className="col-sm-4">
							<Field type="text" name="name" className="form-control" placeholder="Enter your name" />
							<ErrorMessage name="name" style={{ color: "red" }} component="div" />
						</div>
					</div>

					<div className="row mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Phone:</label>
						<div className="col-sm-4">
							<Field type="text" name="phone" className="form-control" placeholder="Enter your phone" />
							<ErrorMessage name="phone" style={{ color: "red" }} component="div" />
						</div>
					</div>
					<div className="row mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Email:</label>
						<div className="col-sm-4">
							<Field type="email" name="email" className="form-control" placeholder="Enter your email" />
							<ErrorMessage name="email" style={{ color: "red" }} component="div" />
						</div>
					</div>
					<div className="row mb-3 ms-1 align-items-center">
						<label className="col-sm-1">Address:</label>
						<div className="col-sm-4">
							<Field type="text" name="address" className="form-control" placeholder="Enter your address" />
							<ErrorMessage name="address" style={{ color: "red" }} component="div" />
						</div>
					</div>
					<button type="submit" className="btn btn-secondary btn-sm mb-3 ms-2">
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	);
}

export default AddFormikComponent;
