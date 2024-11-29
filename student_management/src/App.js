import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentManagement from "./components/StudentManagement";
import HomeComponent from "./components/HomeComponent";
import AddComponent from "./components/AddComponent";

function App() {
	return (
		<>
			<StudentManagement />
			<Routes>
				<Route path={"/students"} element={<StudentList />}></Route>
				<Route path={"/homepage"} element={<HomeComponent />}></Route>
				<Route path={"/add_students"} element={<AddComponent />}></Route>
			</Routes>
		</>
	);
}

export default App;
