import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteComponent(props) {
	return (
		<>
			<Modal show={props.show} onHide={props.closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Bạn có muốn xóa học viên này không?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.closeModal}>
						Đóng
					</Button>
					<Button variant="primary" onClick={props.deleteStudent}>
						Xóa
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteComponent;
