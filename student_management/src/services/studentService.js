const studentList = [
	{
		stt: 1,
		id: 1,
		name: "Nguyen Thi A",
		phone: "0987654321",
		email: "nguyenthia@gmail.com",
		address: "Ha Noi",
	},
	{
		stt: 2,
		id: 2,
		name: "Tran Van B",
		phone: "0123456789",
		email: "tranvanb@gmail.com",
		address: "Ha Noi",
	},
	{
		stt: 3,
		id: 3,
		name: "Nguyen Van C",
		phone: "0918273645",
		email: "nguyenvanc@gmail.com",
		address: "Ha Noi",
	},
];

export function getAllStudent() {
	return studentList;
}

export function addNewStudent(student) {
	studentList.push(student);
}

export function searchByName(name) {
	return studentList.filter((student) => student.name.includes(name));
}

export function getStudentById(id) {
	for (let i = 0; i < studentList.length; i++) {
		if (studentList[i].id === +id) {
			return studentList[i];
		}
	}
	return null;
}

export function deleteByName(name) {
	for (let i = 0; i < studentList.length; i++) {
		if (studentList[i].name === name) {
			studentList.splice(i, 1);
			break;
		}
	}
}
