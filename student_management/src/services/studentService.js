const studentList = [
	{
		id: 1,
		name: "Nguyen Thi A",
		phone: "0987654321",
		email: "nguyenthia@gmail.com",
	},
	{
		id: 2,
		name: "Tran Van B",
		phone: "0123456789",
		email: "tranvanb@gmail.com",
	},
	{
		id: 3,
		name: "Nguyen Van C",
		phone: "0918273645",
		email: "nguyenvanc@gmail.com",
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
