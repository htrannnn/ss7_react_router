import React, { useRef } from "react";
import { addNewStudent, getAllStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

function AddComponent() {
	const navigate = useNavigate();

	const idRef = useRef();
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();

	const handleAddNewStudent = (event) => {
		event.preventDefault();
		addNewStudent({
			id: idRef.current.value,
			name: nameRef.current.value,
			phone: phoneRef.current.value,
			email: emailRef.current.value,
		});
		console.log(getAllStudent());
		navigate("/students");
	};

	return (
		<div className="card-body">
			<h2>Add New Student</h2>
			<form>
				<div className="row ms-2">
					<label className="col-sm-1">ID:</label>
					<div className="col-sm-4">
						<input type="text" name="id" placeholder="Enter ID" ref={idRef} />
					</div>
				</div>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Name:</label>
					<div className="col-sm-4">
						<input type="text" name="name" placeholder="Enter name" ref={nameRef} />
					</div>
				</div>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Phone:</label>
					<div className="col-sm-4">
						<input type="text" name="phone" placeholder="Enter phone" ref={phoneRef} />
					</div>
				</div>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Email:</label>
					<div className="col-sm-4">
						<input type="text" name="email" placeholder="Enter email" ref={emailRef} />
					</div>
				</div>
				<button type="button" value="submit" className="btn btn-secondary rounded-0 mb-3 mt-3" onClick={handleAddNewStudent}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default AddComponent;
