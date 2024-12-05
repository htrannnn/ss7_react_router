import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import HomeComponent from "./components/HomeComponent";
import AddComponent from "./components/AddComponent";
import FooterComponent from "./components/FooterComponent";
import DetailComponent from "./components/DetailComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path={"/homepage"} element={<HomeComponent />}></Route>
				<Route path={"/students"} element={<StudentList />}></Route>
				<Route path={"/students/add_students"} element={<AddComponent />}></Route>
				<Route path={"/students/detail_students/:id"} element={<DetailComponent />}></Route>
			</Routes>
			<FooterComponent />
		</>
	);
}

export default App;
