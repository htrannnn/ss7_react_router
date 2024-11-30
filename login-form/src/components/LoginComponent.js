import React from "react";
import { Link } from "react-router-dom";

function LoginComponent() {
	return (
		<div className="container">
			<div className="card-header">
				<h3 className="text-center">EMPLOYEES MANAGEMENT LOGIN</h3>
			</div>
			<div className="card-body">
				<form>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Email address
						</label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
						<div id="emailHelp" className="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
					</div>
					<button type="button" className="btn btn-primary">
						<Link to="/employee_list"></Link>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default LoginComponent;
